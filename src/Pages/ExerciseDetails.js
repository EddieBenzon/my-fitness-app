import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOptions, fetchData, YouTubeVidOptions } from "../utils/fetchData";
import Details from "../Components/Details";
import ExerciseVideos from "../Components/ExerciseVideos";
import SimilarExercises from "../Components/SimilarExercises";

const ExerciseDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [similarExercises, setSimilarExercises] = useState([]);
  const [similarEquipmentExercises, setSimilarEquipmentExercises] = useState(
    []
  );

  const { id } = useParams();

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExerciseDetails = async () => {
      const exerciseDBURL = "https://exercisedb.p.rapidapi.com";
      const YouTubeSearchURL =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailsData = await fetchData(
        `${exerciseDBURL}/exercises/exercise/${id}`,
        fetchOptions
      );
      setExerciseDetails(exerciseDetailsData);

      const exerciseVideosData = await fetchData(
        `${YouTubeSearchURL}/search?query=${exerciseDetailsData.name}`,
        YouTubeVidOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const similarExerciseData = await fetchData(
        `${exerciseDBURL}/exercises/target/${exerciseDetailsData.target}`,
        fetchOptions
      );
      setSimilarExercises(similarExerciseData);

      const similarEquipmentData = await fetchData(
        `${exerciseDBURL}/exercises/equipment/${exerciseDetailsData.equipment}`,
        fetchOptions
      );
      setSimilarEquipmentExercises(similarEquipmentData);
      scrollTop();
    };

    fetchExerciseDetails();
  }, [id]);

  return (
    <div className="exercise-details-page-container">
      <Details exerciseDetails={exerciseDetails} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetails.name}
      />
      <SimilarExercises
        similarExercises={similarExercises}
        similarEquipmentExercises={similarEquipmentExercises}
      />
    </div>
  );
};

export default ExerciseDetails;
