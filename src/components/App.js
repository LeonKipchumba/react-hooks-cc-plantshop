import React, { useState, useEffect } from 'react';
import PlantList from '../components/PlantList';
import NewPlantForm from '../components/NewPlantForm';
import Search from '../components/Search';
import '../index.css'; 

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error('Error fetching plants:', error));
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Plantsy 🌱</h1>
      </header>
      <main>
        <NewPlantForm setPlants={setPlants} />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <PlantList plants={plants} setPlants={setPlants} searchTerm={searchTerm} />
      </main>
    </div>
  );
}

export default App;