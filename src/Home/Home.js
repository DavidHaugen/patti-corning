import React, {Component} from 'react';
import hibiscus from '../images/hibiscus.jpeg';
import paintingFlowers from '../images/painting-flowers.jpeg';
import tulip from '../images/tulip.jpeg';
import './Home.css';


export default class Home extends Component{
  state = {
    images: [hibiscus, paintingFlowers, tulip],
    currentImage: 0
  }
  nextImage = () => {
    if(this.state.currentImage < this.state.images.length -1){
      this.setState({currentImage: this.state.currentImage +1});
    } else{
      this.setState({currentImage: 0});
    }
  }

  previousImage = () => {
    if(this.state.currentImage > 0){
      this.setState({currentImage: this.state.currentImage -1});
    } else {
      this.setState({currentImage: this.state.images.length - 1});
    }
  }

  render(){
    return (
      <div className='center painting-container flex'>
        <i className="fas fa-arrow-left arrow-button" onClick={this.previousImage}></i>
        <div className='painting'>
          <img src={this.state.images[this.state.currentImage]} style={{width: '800px'}} alt='Sample'/>
        </div>
        <i className="fas fa-arrow-right arrow-button" onClick={this.nextImage}></i>
      </ div>
    );
  }
}