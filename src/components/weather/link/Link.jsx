import React, { Component } from 'react'

export default class Links extends Component {
  
  render() {
    return (
      <div>
            <h3>{this.props.item?.  dt_txt}</h3>
            <h4>{'пасмурно'===this.props.item?.weather[0].description?
            <div>
            {this.props.item?.weather[0].description}
            </div>
            :this.props.item?.weather[0].description}
            </h4>

          <h4>{Math.ceil(this.props.item?.main.temp -273.15)}°C</h4>
        </div>
      
    )
  }
}
