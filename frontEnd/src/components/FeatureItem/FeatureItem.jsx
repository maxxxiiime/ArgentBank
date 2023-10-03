import React from 'react';

export default function FeatureItem({title,image,description}){
  return (
    <div className="feature-item">
    <img src={image} alt="Chat Icon" className="feature-icon" />
    <h3 className="feature-item-title">{title}</h3>
    <p>{description}</p>
  </div>
  )
}