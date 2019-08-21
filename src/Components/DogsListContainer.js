import React, {PureComponent} from 'react'
import request from 'superagent'
import DogsList from './DogsList'
import './DogsListContainer.css'

export default class DogsListContainer extends PureComponent {
  state = { dogBreeds: null }

  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const breeds = Object.keys(response.body.message)
        this.updateBreeds(breeds)
      })
      .catch(console.error)
  }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }

  render() { 
    return (
    <div className="dog-container">
    <DogsList dogBreeds={this.state.dogBreeds} />
    </div>
    )
  }
}
