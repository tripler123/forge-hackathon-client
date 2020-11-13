import React from 'react'

function Project(props) {
  const { name, image_url } = props;
  return (
    <div>
      <h2>{name}</h2>
      <img src={image_url} alt={name} />
    </div>
  )
}

export default Project
