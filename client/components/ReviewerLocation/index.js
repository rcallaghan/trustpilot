import React from 'react'

const ReviewerLocation = (props) => {
  return (
    <div className="location">
      <p>{props.location && `Location: ${props.location}`}</p>
    </div>
  )
}

ReviewerLocation.propTypes = {
  location: React.PropTypes.string.isRequired
}

export default ReviewerLocation
