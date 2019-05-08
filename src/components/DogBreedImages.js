import React from 'react'
import { Link } from 'react-router-dom'
//import DogBreedImagesContainer from './DogBreedImagesContainer'


export default function DogBreedImages (props) {
    console.log(props.images)
    
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>

      <Link to="/">Go back to the index</Link>
      <div>
     { props.images && props.images.map(url => <img src={ url } alt="Dog" />) }
     { !props.images && 'Loading...' }
</div>
      
    </div>
  )
}
//hello