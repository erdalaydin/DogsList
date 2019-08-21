import React, { Component } from 'react';
import './App.css';
import DogsListContainer from './Components/DogsListContainer';
import { Route } from 'react-router-dom'
import DogBreedImagesContainer from './Components/DogBreedImagesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={DogsListContainer} />          
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
        </main>
      </div>
    );
  }
}

export default App;