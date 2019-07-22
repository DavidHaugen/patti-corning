import React, {Component} from 'react';
import hibiscus from '../images/hibiscus.jpeg';
import paintingFlowers from '../images/painting-flowers.jpeg';
import tulip from '../images/tulip.jpeg';
import './Home.css';

export default class Home extends Component{
  render(){
    return (
      <div className='center painting-container'>
        <div className='painting'>
          <img src={tulip} style={{width: '800px'}} alt='Sample'/>
        </div>
      </ div>
    );
  }
}