import React from 'react';
import './Css/Bande.css';

function Bande({ imageSrc }) {
  return (
    <div className="bande">
      <img className='bande-image' src={imageSrc} alt="Bande" />
    </div>
  );
}

export default Bande;
