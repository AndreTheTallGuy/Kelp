import {
  GET_AQUARIUMS,
  GET_AQUARIUM,
  AQUARIUM_ERROR,
  UPDATE_LIKES,
  ADD_AQUARIUM,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT_LIKES,
} from "../actions/types";

const initialState = {
  aquariums: [],
  aquarium: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_AQUARIUMS:
      return {
        ...state,
        aquariums: payload,
        loading: false,
      };
    case GET_AQUARIUM:
      return {
        ...state,
        aquarium: payload,
        loading: false,
      };
    case ADD_AQUARIUM:
      return {
        ...state,
        aquariums: [...state.aquariums, payload],
        loading: false,
      };
    case AQUARIUM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        aquariums: state.aquariums.map((aqua) =>
          aqua._id === payload.id ? { ...aqua, likes: payload.likes } : aqua
        ),
        loading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        aquarium: { ...state.aquarium, comments: payload },
        loading: false,
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        aquarium: {
          ...state.aquarium.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
        loading: false,
      };
    case UPDATE_COMMENT_LIKES:
      console.log("reducer hit", action);
      return {
        ...state,
        aquariums: state.aquariums.comments.map((aqua) =>
          aqua._id === payload.id ? { ...aqua, likes: payload.likes } : aqua
        ),
        loading: false,
      };
    default:
      return state;
  }
}
