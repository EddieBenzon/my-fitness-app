import React, { useRef } from "react";
import MuscleGroup from "./MuscleGroup";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { IconContext } from "react-icons";
import ExerciseCard from "./ExerciseCard";
const HorizontalScrollbar = ({
  data,
  activeMuscleGroup,
  setActiveMuscleGroup,
  isMuscleGroups,
}) => {
  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    containerRef.current.scrollLeft -= 500;
  };

  const handleScrollRight = () => {
    containerRef.current.scrollLeft += 500;
  };

  return (
    <>
      <div
        className="scrollbar-main-wrapper"
        ref={containerRef}
        style={{ width: isMuscleGroups ? "90%" : "100%" }}
      >
        <div className="scrollbar-container">
          {data.map((item, index) =>
            isMuscleGroups ? (
              <MuscleGroup
                key={index}
                item={item}
                setActiveMuscleGroup={setActiveMuscleGroup}
                activeMuscleGroup={activeMuscleGroup}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )
          )}
        </div>
      </div>
      <div className="scrollbar-arrow-container">
        <IconContext.Provider
          value={{ className: "horizontal-scrollbar-button" }}
        >
          <HiOutlineArrowNarrowLeft onClick={handleScrollLeft} />
        </IconContext.Provider>
        <IconContext.Provider
          value={{ className: "horizontal-scrollbar-button" }}
        >
          <HiOutlineArrowNarrowRight onClick={handleScrollRight} />
        </IconContext.Provider>
      </div>
    </>
  );
};

export default HorizontalScrollbar;
