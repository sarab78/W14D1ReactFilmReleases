import React, { Component } from "react";
import './Film.css';
class film extends Component {

  render(){
    console.log(this.props.film)
    return (
      <div className="film">
      <ul>
      <a href={this.props.film.url}>
      <li>{ this.props.film.name}</li>
      </a>
      </ul>
      </div>
    )
  }
}
export default film;
