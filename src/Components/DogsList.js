import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'
import './DogList.css';


export default class DogsList extends PureComponent {
  renderDogBreed(breed) {
    return (
    <li ey={breed } ><Link className="listing" to={ `/dog-breeds/${breed}` }>{breed}</Link></li>
    )
}

  render() {
    const { dogBreeds } = this.props
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>

        { !dogBreeds && 'Loading...' }
        
        { 
          dogBreeds &&
          <ul className="dog-list2">{ dogBreeds.map(this.renderDogBreed) }</ul>
        }
      </div>
    )
  }

}