import React, { useEffect, useState } from "react";
import { fetchData, fetchOptions } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import ReactPaginate from "react-paginate";
import Loading from "./Loading";

const Exercises = ({
  activeMuscleGroup,
  exercises,
  setExercises,
  loading,
  setLoading,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  const exercisesParsed = Math.min(
    currentPage * itemsPerPage,
    exercises.length - 1
  );

  const displayExercises = exercises
    .slice(exercisesParsed, exercisesParsed + itemsPerPage)
    .map((exercise, index) => {
      return <ExerciseCard key={exercise.id} exercise={exercise} />;
    });

  useEffect(() => {
    const getCategory = async () => {
      let exerciseList = [];
      setLoading(true);
      if (activeMuscleGroup === "all") {
        exerciseList = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises`,
          fetchOptions
        );
      } else {
        exerciseList = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${activeMuscleGroup}`,
          fetchOptions
        );
      }
      setLoading(false);
      setExercises(exerciseList);
      setCurrentPage(0);
    };
    getCategory();
  }, [activeMuscleGroup]);

  const pageCount = Math.ceil(exercises.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className="exercises-wrapper">
        {loading ? <Loading /> : displayExercises}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"pagination-break"}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        previousLinkClassName={"navigate-btn"}
        nextLinkClassName={"navigate-btn"}
        disabledClassName={"pagination-link-disabled"}
        activeClassName={"pagination-link-active"}
        pageClassName={"numbered-button"}
      />
    </>
  );
};

export default Exercises;
