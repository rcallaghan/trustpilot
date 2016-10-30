import React from 'react'
import Logo from './trustpilot-logo-light-bg-120x18.png'

const OverallRating = (props) => {

  const ratings = props.data.map(item => {
    return parseInt(item.starRating)
  })

  const add = (a, b) => {
      return a + b;
  }

  const numberOfReviews = props.data.length
  const totalOfReviews = ratings.reduce(add, 0);
  const average = totalOfReviews / numberOfReviews

  const Overall = (average) => {
    if(average <= 2) {
      return 'Poor'
    }
    if(average <=4) {
      return 'Average'
    }
    if(average > 4) {
      return 'Great'
    }
  }

  return (
    <div className="overview">
      <img src={Logo} alt="Trustpilot"/>
      <h3>{ Overall(average) }</h3>
      <img className="rating--average" src={`images/${average || 0}-stars-260x48.png`} />
      <p>Rated {average ? average : "0"} out of {numberOfReviews ? numberOfReviews : "0"} based on {numberOfReviews ? numberOfReviews : "0"} Reviews</p>
    </div>
  )
}

export default OverallRating
