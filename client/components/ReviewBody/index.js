import React from 'react'

const ReviewBody = (props) => {
  return (
    <p>{props.body}</p>
  )
}

ReviewBody.propTypes = {
  body: React.PropTypes.string.isRequired
}

export default ReviewBody
