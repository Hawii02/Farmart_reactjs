import React, { useState } from 'react';
import './Home.css';

function Home() {
  const animals = [
    { id: 1, breed: 'Goat', category: 'livestock', image_url: 'https://www.africanfarming.com/wp-content/uploads/komatsu.jpeg', price: 1000, farmer_id: 'seller1' },
    { id: 2, breed: 'Goat', category: 'livestock', image_url: 'https://static.wixstatic.com/media/ec2c85_15cda56ec7074941b9c4b9fffa8c975e~mv2.jpg/v1/fill/w_303,h_300,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/IMG_1953_JPG.jpg', price: 50, farmer_id: 'seller1'},
    { id: 3, breed: 'Horse', category: 'equines', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImaFZP_SRMx0vtv_qz65a1coTjlgaM6YLgJXUJciV9Q&s', price: 2000, farmer_id: 'seller2' },
    { id: 1, breed: 'Goat', category: 'livestock', image_url: 'https://www.africanfarming.com/wp-content/uploads/komatsu.jpeg', price: 1000, farmer_id: 'seller1' },
    { id: 2, breed: 'Goat', category: 'livestock', image_url: 'https://static.wixstatic.com/media/ec2c85_15cda56ec7074941b9c4b9fffa8c975e~mv2.jpg/v1/fill/w_303,h_300,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/IMG_1953_JPG.jpg', price: 50, farmer_id: 'seller1'},
    { id: 3, breed: 'Horse', category: 'equines', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImaFZP_SRMx0vtv_qz65a1coTjlgaM6YLgJXUJciV9Q&s', price: 2000, farmer_id: 'seller2' },
  ];
  /*Setting states for loading the DOM, all animals and selecting categories*/
  ///const [isError, setIsError] = useState(false);
  ///const [isLoaded, setIsLoaded] = useState(false);
  ///const [allAnimals, setAllAnimals] = useState([]);
  ///const [allAnimals, setAllAnimals] = useState(animals);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAnimalDetails, setShowAnimalDetails] = useState(false);

  /*Funtion to fetch all animals when the DOM loads*/
  ///useEffect (() => {
    ///fetch ("/farm_animals")
    ///.then ((response) => response.json())
    ///.then ((data) => {
        /*After fetching the data, the animals are loaded, and the isLoaded state changes to true*/
        ///setIsLoaded(true);
        /*Sets the animals state with the fetched data */
        ///setAllAnimals(data);
        ///setFilteredAnimals(data);
    ///})
    /*error handling that sets the isError state */
    ///.catch((error) => {
        ///setIsError(true);
        ///console.error('Error loading animals:', error);
    ///});
    
  ///}, []); /*There are no dependencies for the useEffect as it will be rendered only after loading, hence an empty array */

  /*Funcion to filter the animals when state changes for the selectedCategory*/
  function filterAnimalsByCategory(category) {
    if (category === null) {
      setFilteredAnimals(animals);
      ///setFilteredAnimals(allAnimals);
    } else if (category === 'all-animals') {
      setFilteredAnimals(animals);
    } else {
    const animalsFiltered = animals.filter(animal => animal.category === category);
    setFilteredAnimals(animalsFiltered)
    }
  }

  /*Function to handle category selection*/
  function handleCategoryClick (category) {
    if (category === selectedCategory) {
      return; 
    }
    setSelectedCategory(category);
    filterAnimalsByCategory(category);
  };

  function toggleDetails () {
    setShowAnimalDetails(!showAnimalDetails);
  };

  /*Renders if there is an error with DOM loading */
  ///if (isError) {
    ///return <div>Error occurred while loading data</div>;
  ///}

  /*Renders when the DOM loads but the animals are not fetched */
  ///if (!isLoaded) {
    ///return <div>Loading...</div>;
  ///}

  return (
    <div className='home-container'>
      {/*Rendering the category buttons*/}
      <div >
      <button onClick={() => handleCategoryClick('all-animals')}>All Animals</button>
        <button className='category-buttons' onClick={() => handleCategoryClick('poultry')}>Poultry</button>
        <button className='category-buttons' onClick={() => handleCategoryClick('livestock')}>Livestock</button>
        <button className='category-buttons' onClick={() => handleCategoryClick('equines')}>Equines</button>
        <button className='category-buttons' onClick={() => handleCategoryClick('aquaculture')}>Aquaculture</button>
        <button className='category-buttons' onClick={() => handleCategoryClick('camelids')}>Camelids</button>
        <button className='category-buttons' onClick={() => handleCategoryClick('apiary')}>Apiary</button>
        <button className='category-buttons' onClick={() => handleCategoryClick('exotic-animals')}>Exotic Animals</button>
        <button className='category-buttons' onClick={() => handleCategoryClick('small-mammals')}>Small Mammals</button>
        <button className='category-buttons' onClick={() => handleCategoryClick('other')}>Other</button>
      </div>

      {/*Rendering the animals*/}
      <div className='animals'>
        <ul>
          {filteredAnimals.map((animal) => (
            <li key={animal.id} className='animal-card'>
              <div className='image-container'>
                <img className='images' src={animal.image_url} alt={animal.name} />
              </div>
              <div className='animal-details'>
                {animal.breed} - ${animal.price}
              </div>
              <div className="additional-animal-details">
                {showAnimalDetails && (
                    <>
                    <h5>Animal Profile</h5>
                    <p>Type: {animal.type}</p>
                    <p>Age: {animal.age}</p>
                    <p>Weight: {animal.weight}</p>
                    <button>Add to Cart</button>
                    <p>Description: {animal.description}</p>
                    
                    </>
                )}
                <button className= "button" onClick={toggleDetails}>
                    {showAnimalDetails ? 'Hide Profile' : 'Show Animal Profile'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home