import React from "react";
import { TbBarbell } from "react-icons/tb";
import { MdSportsMartialArts } from "react-icons/md";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

const Details = ({ exerciseDetails }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetails;
  const navigate = useNavigate();
  return (
    <div className="exercise-details-info-container">
      <img src={gifUrl} alt={"exercise_gif"} className="exercise-gif" />
      <div className="details-info-wrapper">
        <h1>{name}</h1>
        <p>
          {bodyPart === "cardio"
            ? `This is a great exercise to improve your cardiovascular health.`
            : `This is a great exercise for your ${bodyPart} that specifically activates your ${target}.`}
        </p>
        <p>
          {equipment === "body weight"
            ? `This exercise can be done with your body weight.`
            : `You will need a ${equipment} for this exercise.`}
        </p>
        <section>
          <IconContext.Provider value={{ className: "details-icon" }}>
            <MdSportsMartialArts /> <span>{bodyPart}</span>
            <span>{target}</span>
          </IconContext.Provider>
        </section>

        <section>
          <IconContext.Provider value={{ className: "details-icon" }}>
            <TbBarbell />
          </IconContext.Provider>
          <span>{equipment}</span>
        </section>
        <button onClick={() => navigate("/")}>Back to Exercises</button>
      </div>
    </div>
  );
};

export default Details;
