import React, { useRef, useState } from "react";
import HeroBanner from "../Components/HeroBanner";
import SearchExercises from "../Components/SearchExercises";
import { BsArrowDown } from "react-icons/bs";
import Exercises from "../Components/Exercises";
import Footer from "../Components/Footer";

const Home = () => {
  const scrollRef = useRef(null);
  const [exercises, setExercises] = useState([]);
  const [activeMuscleGroup, setActiveMuscleGroup] = useState("all");
  const [loading, setLoading] = useState(true);

  const scrollDown = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="home-wrapper">
        <div className="home-text-wrapper">
          <h1>Champions Club</h1>
          <h3>
            Eat, Sleep, <br />
            Train, Repeat
          </h3>
          <p>Check out some amazing exercises to kick your body into gear!</p>
          <button onClick={scrollDown}>
            Explore exercises <BsArrowDown />
          </button>
        </div>
        <HeroBanner />
      </div>
      <SearchExercises
        scrollRef={scrollRef}
        activeMuscleGroup={activeMuscleGroup}
        setActiveMuscleGroup={setActiveMuscleGroup}
        setExercises={setExercises}
        exercises={exercises}
      />
      <Exercises
        loading={loading}
        setLoading={setLoading}
        activeMuscleGroup={activeMuscleGroup}
        exercises={exercises}
        setExercises={setExercises}
      />
    </>
  );
};

export default Home;
