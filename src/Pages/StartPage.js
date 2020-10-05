import React from 'react';
import masivianImg from '../imgReact/Masivian2.png';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.scss';

function StartPage() {
  return (      

      <center>  
      <h1>Vota Por tus Comics Favoritos</h1> 
        <img src={masivianImg} alt="masiv" style={{width: 300, marginTop: -4}} id="mainImage" />
      </center>      
    
  );
}

export default StartPage;
