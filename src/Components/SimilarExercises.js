import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loading from "./Loading";
const SimilarExercises = ({ similarExercises, similarEquipmentExercises }) => {
  return (
    <div className="related-exercises-wrapper">
      <h1>
        Exercises that target the same <span>muscle</span>
      </h1>
      {similarExercises.length ? (
        <HorizontalScrollbar data={similarExercises} />
      ) : (
        <Loading />
      )}
      <h1>
        Exercises that require the same <span>equipment</span>
      </h1>
      {similarExercises.length ? (
        <HorizontalScrollbar data={similarEquipmentExercises} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SimilarExercises;
