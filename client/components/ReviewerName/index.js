import React from 'react'

const ReviewerName = (props) => {
  return (
    <p><b>{props.name} had this to say about Infurn...</b></p>
  )
}

ReviewerName.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default ReviewerName
