import React from "react";
import { CgGym } from "react-icons/cg";
import { IconContext } from "react-icons";

const MuscleGroup = ({ item, setActiveMuscleGroup, activeMuscleGroup }) => {
  return (
    <div
      className={
        activeMuscleGroup === item
          ? "muscle-group-card-active"
          : "muscle-group-card"
      }
      onClick={() => {
        setActiveMuscleGroup(item);
        window.scrollTo({ top: 1300, behavior: "smooth" });
      }}
    >
      <IconContext.Provider
        value={{
          className: `${
            activeMuscleGroup === item
              ? "muscle-group-logo-active"
              : "muscle-group-logo"
          }`,
        }}
      >
        <CgGym />
      </IconContext.Provider>
      <h5>{item.toUpperCase()}</h5>
    </div>
  );
};

export default MuscleGroup;
