import React from 'react';

function NavBar({ onNextClick, onPrevClick }) {
  return (
    <div>
      <button onClick={onPrevClick}>Pokémon précédent</button>
      <button onClick={onNextClick}>Pokémon suivant</button>
    </div>
  );
}

export default NavBar;
