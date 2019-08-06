import React, { Component } from "react";
import Film from './Film';

class FilmList extends Component {

  render (){

     const filmNodes = this.props.data.map(film => {
       return <Film film={film}  key={film.id} url={film.url}/>
     });

     return <> { filmNodes } </>
  }
}

export default FilmList;
