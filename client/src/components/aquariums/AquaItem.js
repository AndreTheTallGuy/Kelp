import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addLike, removeLike } from "../../actions/aquariums";

const AquaItem = ({
  addLike,
  removeLike,
  auth,
  aquarium: { _id, description, name, photo, user, likes, comments, date },
}) => (
  <div className='aquaItem bg-white p-1' data-aos='fade-up'>
    <div>
      <Link to={`/aquarium/${_id}`}>
        <img className='aqua-img' src={photo} alt='Pic of aquarium' />
        <h4 className='text-primary aqua-name'>{name}</h4>
      </Link>
    </div>
    <div>
      <p className='aqua-desc my-1'>{description}</p>

      <button
        onClick={(e) => addLike(_id)}
        type='button'
        className='btn btn-light'
      >
        <i className='fas fa-chevron-up'></i>{" "}
        {likes.length > 0 && <span>{likes.length}</span>}
      </button>
      <button
        onClick={(e) => removeLike(_id)}
        type='button'
        className='btn btn-light'
      >
        <i className='fas fa-chevron-down'></i>
      </button>

      <Link to={`/aquarium/${_id}`} className='btn btn-primary'>
        Reviews{" "}
        {comments.length > 0 && (
          <span className='comment-count'>({comments.length})</span>
        )}
      </Link>
    </div>
  </div>
);

AquaItem.propTypes = {
  aquarium: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike })(AquaItem);
