import './ProjImg.css';
import React from 'react';
import { Component } from 'react';
class ProjImg extends Component {
    render(){
        return (
          <div className='proj-img'>
              <div className='heading'>
                 <h1>{this.props.heading}</h1> 
                 <p>{this.props.text}</p> 
              </div>
      
          </div>
  );
    }
}

export default ProjImg