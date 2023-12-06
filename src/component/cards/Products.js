// App.js
import React from 'react';
import OverlayImageCard from './OverlayImageCard';

function App() {
  const cards = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      image: 'card1.jpg',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      image: 'card2.jpg',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
      image: 'card3.jpg',
    },
  ];

  return (
    <div className="app">
      {cards.map((card, index) => (
        <OverlayImageCard key={index} {...card} />
      ))}
    </div>
  );
}

export default App;
