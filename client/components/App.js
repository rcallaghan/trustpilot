import React, { Component } from 'react'
import { render } from 'react-dom'
import RequestManager from '../services/request-manager'

import OverallRating from './OverallRating'
import Review from './Review'

export default class Trustpilot extends Component {

  constructor(props) {
    super()
    this.state = { data: [] }
  }

  componentWillMount() {

    const reviews = sessionStorage.getItem('reviews')

    if(!reviews) {
      RequestManager.get('https://api.myjson.com/bins/4ohsu').then(payload => {
        sessionStorage.setItem('reviews', JSON.stringify(payload))
        this.setState({data: payload})
      })
    }

    this.setState({data: JSON.parse(reviews)})
  }

  render() {
    return (
        <section className="container">
        {
          this.state.data && <OverallRating data={this.state.data}/>
        }

        {
          this.state.data && this.state.data.map((item, index) =>
            <Review
              key={index}
              fullname={item.fullName}
              location={item.location}
              title={item.reviewTitle}
              body={item.reviewBody}
              rating={item.starRating} />
          )
        }
        </section>
    )
  }
}
