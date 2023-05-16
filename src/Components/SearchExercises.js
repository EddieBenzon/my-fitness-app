import React, { useEffect, useState } from "react";
import { fetchData, fetchOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({
  scrollRef,
  activeMuscleGroup,
  setActiveMuscleGroup,
  setExercises,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [muscleGroups, setMuscleGroups] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchTerm) {
      const data = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        fetchOptions
      );
      const searchedExercises = data.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(searchTerm) ||
          exercise.target.toLowerCase().includes(searchTerm) ||
          exercise.equipment.toLowerCase().includes(searchTerm) ||
          exercise.bodyPart.toLowerCase().includes(searchTerm)
        );
      });
      setSearchTerm("");
      setExercises(searchedExercises);
    } else return;
  };

  useEffect(() => {
    const fetchMuscleGroups = async () => {
      const muscleGroupData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        fetchOptions
      );

      setMuscleGroups(["all", ...muscleGroupData]);
    };
    fetchMuscleGroups();
  }, []);

  return (
    <div ref={scrollRef} className="search-exercises-wrapper">
      <h1>Find awesome exercises</h1>
      <form onSubmit={handleSearch} className="input-wrapper">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          onSubmit={handleSearch}
        />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>
      <h3>Browse by muscle group</h3>
      <HorizontalScrollbar
        data={muscleGroups}
        activeMuscleGroup={activeMuscleGroup}
        setActiveMuscleGroup={setActiveMuscleGroup}
        isMuscleGroups
      />
    </div>
  );
};

export default SearchExercises;
