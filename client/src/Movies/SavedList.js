import React from 'react';
import {NavLink} from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(({title,id}) => (
      <NavLink to={`/movies/${id}`}><span className="saved-movie">{title}</span></NavLink>
    ))}
    <div ClassName="home-button"><NavLink to="/">Home</NavLink></div>
  </div>
);

export default SavedList;
