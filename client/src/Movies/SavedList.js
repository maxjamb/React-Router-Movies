import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div ClassName="home-button"><NavLink to="/">Home</NavLink></div>
  </div>
);

export default SavedList;
