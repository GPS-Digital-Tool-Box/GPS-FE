import React from 'react';
import { Link } from 'react-router-dom';

function ModuleCard(props) {
  const { name, description, slug } = props
  return (
    <Link to={`/${slug}`}>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default ModuleCard;
