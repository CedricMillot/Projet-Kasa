import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Css/Container.css';


function Container() {
  return (
    <div className="container">
      {/* Entourez chaque image d'un lien */}
      <Link to="/Navigation">
        <img
          src="https://img.freepik.com/vecteurs-libre/fond-rouge-aquarelle-valentine-rouge_1340-4006.jpg?w=360"
          alt=""
        />
      </Link>
      <Link to="/Navigation">
        <img
          src="https://img.freepik.com/vecteurs-libre/fond-rouge-aquarelle-valentine-rouge_1340-4006.jpg?w=360"
          alt=""
        />
      </Link>
      <Link to="/Navigation">
        <img
          src="https://img.freepik.com/vecteurs-libre/fond-rouge-aquarelle-valentine-rouge_1340-4006.jpg?w=360"
          alt=""
        />
      </Link>
      <Link to="/Navigation">
        <img
          src="https://img.freepik.com/vecteurs-libre/fond-rouge-aquarelle-valentine-rouge_1340-4006.jpg?w=360"
          alt=""
        />
      </Link>
      <Link to="/Navigation">
        <img
          src="https://img.freepik.com/vecteurs-libre/fond-rouge-aquarelle-valentine-rouge_1340-4006.jpg?w=360"
          alt=""
        />
      </Link>
      <Link to="/Navigation">
        <img
          src="https://img.freepik.com/vecteurs-libre/fond-rouge-aquarelle-valentine-rouge_1340-4006.jpg?w=360"
          alt=""
        />
      </Link>
    </div>
  );
}

export default Container;