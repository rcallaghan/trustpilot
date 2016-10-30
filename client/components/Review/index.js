import React from 'react'
import { render } from 'react-dom'
import ReviewTitle from '../ReviewTitle'
import ReviewBody from '../ReviewBody'
import ReviewRating from '../ReviewRating'
import ReviewerName from '../ReviewerName'
import ReviewerLocation from '../ReviewerLocation'

const Review = (props) => {

  const { body, fullname, location, rating, title } = props

  return (
    <div className="review">
      <ReviewTitle title={title} />
      <ReviewRating rating={rating} />
      <ReviewerName name={fullname} />
      <ReviewBody body={body} />
      <ReviewerLocation location={location} />
    </div>
  )
}

export default Review
