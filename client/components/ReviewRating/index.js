import React from 'react'

const ReviewRating = (props) => {
  return (
    <img src={`images/${props.rating}-stars-260x48.png`} />
  )
}

ReviewRating.propTypes = {
  rating: React.PropTypes.string.isRequired
}

export default ReviewRating
