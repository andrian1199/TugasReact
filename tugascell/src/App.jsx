import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import card4 from './assets/card 4.svg';
import card5 from './assets/card 5.svg';
import card6 from './assets/card 6.svg';
import card7 from './assets/card 7.svg';
import card8 from './assets/card 8.svg';
import card9 from './assets/card 9.svg';
import card10 from './assets/card 10.svg';
import card11 from './assets/card 11.svg';
import card12 from './assets/card 12.svg';
import card13 from './assets/card 13.svg';
import card14 from './assets/card 14.svg';
import card15 from './assets/card 15.svg';

const imageCategories = {
  All: [
    { src: card4, label: 'card 4' },
    { src: card5, label: 'card 5' },
    { src: card6, label: 'card 6' },
    { src: card7, label: 'card 7' },
    { src: card8, label: 'card 8' },
    { src: card9, label: 'card 9' },
    { src: card10, label: 'card 10' },
    { src: card11, label: 'card 11' },
    { src: card12, label: 'card 12' },
    { src: card13, label: 'card 13' },
    { src: card14, label: 'card 14' },
    { src: card15, label: 'card 15' },
  ],
  Rock: [
    { src: card4, label: 'card 4' },
    { src: card5, label: 'card 5' },
    { src: card6, label: 'card 6' },
    { src: card7, label: 'card 7' },
  ],
  Jazz: [
    { src: card8, label: 'card 8' },
    { src: card9, label: 'card 9' },
    { src: card10, label: 'card 10' },
    { src: card11, label: 'card 11' },
  ],
  Pop: [
    { src: card12, label: 'card 12' },
    { src: card13, label: 'card 13' },
    { src: card14, label: 'card 14' },
    { src: card15, label: 'card 15' },
  ],
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');


  const filteredImages = imageCategories[selectedCategory].filter(image =>
    image.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="kategori-container">
      <div className="button-group d-flex mb-4">
        <button className="kategori-button btn btn-outline-primary mx-2" onClick={() => setSelectedCategory('All')}>All</button>
        <button className="kategori-button btn btn-outline-primary mx-2" onClick={() => setSelectedCategory('Rock')}>Rock</button>
        <button className="kategori-button btn btn-outline-primary mx-2" onClick={() => setSelectedCategory('Jazz')}>Jazz</button>
        <button className="kategori-button btn btn-outline-primary mx-2" onClick={() => setSelectedCategory('Pop')}>Pop</button>
      </div>

      <div className="search-container mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Cari gambar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredImages.map((image, index) => (
          <div key={index} className="col-12 col-md-3 mb-4">
            <img 
              src={image.src} 
              className="img-fluid" 
              alt={`gambar ${selectedCategory} ${index + 1}`} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
