import React from 'react';

function MoodCard(props) {
  return (
    <div className="mood-card">
      <div className="mood-icon">{props.emoji}</div>
      <h3>{props.name}</h3>
    </div>
  )
}

export default MoodCard;