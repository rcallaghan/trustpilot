import React from 'react'

const ReviewTitle = (props) => {
  return (
    <h3>{props.title}</h3>
  )
}

ReviewTitle.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default ReviewTitle
