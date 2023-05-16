import React from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <div className="exercise-videos-container">
      <h1>
        Watch <span>{name}</span> videos:
      </h1>
      <section className="video-section">
        {exerciseVideos?.slice(0, 3).map((item, index) => {
          return (
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="video-wrapper">
                <img src={item.video.thumbnails[0].url} alt="video-thumbnail" />
                <h4 className="vid-title">{item.video.title} </h4>
                <h4 className="vid-author">{item.video.channelName}</h4>
              </div>
            </a>
          );
        })}
      </section>
    </div>
  );
};

export default ExerciseVideos;
