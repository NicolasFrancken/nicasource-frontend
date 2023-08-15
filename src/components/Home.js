import "../styles/Home.css";

import Header from "./Header";
import getVideos from "../libs/getVideos";

import { useEffect, useState } from "react";

function Home() {
  const [videos, setVideos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const res = await getVideos();

      if (res.message) {
        setErrorMessage(res.message);
        return;
      }

      setVideos(res.videos);
    };

    fetch();
  }, []);

  let renderedVideos;
  if (videos.length === 0) {
    renderedVideos = (
      <div>
        <p>No videos available...</p>
      </div>
    );
  } else {
    renderedVideos = videos.map((v) => {
      return (
        <div key={v.id_video} className="Home-VideoContainer">
          <iframe
            width="300"
            height="169"
            src={v.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="Home-FrameContainer"
          ></iframe>
          <h2 className="Home-VideoTitle">{v.title}</h2>
          <label className="Home-VideoDate">
            Date Uploaded: {v.date.slice(0, 10)}
          </label>
        </div>
      );
    });
  }

  return (
    <>
      <Header />
      <div className="Home-Container">
        <h2 className="Home-Title">All published videos</h2>
        {errorMessage ? (
          <div className="Home-Error">
            <p>{errorMessage}</p>
          </div>
        ) : (
          <div className="Home-SubContainer">{renderedVideos}</div>
        )}
      </div>
    </>
  );
}

export default Home;
