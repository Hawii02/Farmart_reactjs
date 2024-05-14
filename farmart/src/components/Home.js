import React, { useState } from 'react';
import Login from './Login';
// import SignUp from './SignUp'; // Import the SignUp component
import FilterandSort from './FilterandSort';
import MyCart from './MyCart';
import SearchBar from './SearchBar';

function Home() {
  const animals = [
    { id: 1, breed: 'Goat', category: 'livestock', image_url: 'https://www.africanfarming.com/wp-content/uploads/komatsu.jpeg', price: 1000 },
    { id: 2, breed: 'Goat', category: 'livestock', image_url: 'https://static.wixstatic.com/media/ec2c85_15cda56ec7074941b9c4b9fffa8c975e~mv2.jpg/v1/fill/w_303,h_300,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/IMG_1953_JPG.jpg', price: 50 },
    { id: 3, breed: 'Horse', category: 'equines', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImaFZP_SRMx0vtv_qz65a1coTjlgaM6YLgJXUJciV9Q&s', price: 2000 },
  ];
  
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  function filterAnimalsByCategory(category) {
    if (category === null) {
      setFilteredAnimals(animals);
    } else if (category === 'all-animals') {
      setFilteredAnimals(animals);
    } else {
      const animalsFiltered = animals.filter(animal => animal.category === category);
      setFilteredAnimals(animalsFiltered)
    }
  }

  function handleCategoryClick (category) {
    if (category === selectedCategory) {
      return; 
    }
    setSelectedCategory(category);
    filterAnimalsByCategory(category);
  };

  return (
    <div>
      <h1>Farm<span className='highlighted'>art</span></h1>
      <Login className='login'/>
      <MyCart className='mycart' />
      <SearchBar onSearch={(searchTerm) => console.log(searchTerm)} />
      <FilterandSort className='filter'/>
      
      <div className='buttons'>
        <button onClick={() => handleCategoryClick('all-animals')}>All Animals</button>
      </div>

      <div className='animals'>
        <ul>
          {filteredAnimals.map((animal) => (
            <li key={animal.id}>
              <img src={animal.image_url} alt={animal.name} />
              {animal.breed} - ${animal.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;