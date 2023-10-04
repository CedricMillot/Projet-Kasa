import React from 'react';
import '../Css/Bande.css';

function Bande({ imageSrc, texte }) {
  return (
    <div className="bande">
      <img className='bande-image' src={imageSrc} alt="Bande" />
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default Bande;
