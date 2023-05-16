import React from "react";
import { NavLink } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <NavLink to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt="exercise-gif" loading="lazy" />
      <div className="button-container">
        <button>{exercise.bodyPart}</button>
        <button>{exercise.target}</button>
        <button>{exercise.equipment}</button>
      </div>
      <p>{exercise.name}</p>
    </NavLink>
  );
};

export default ExerciseCard;
