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
        <div key={v.id_video}>
          <iframe
            width="560"
            height="315"
            src={v.url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h2>{v.title}</h2>
          <label>{v.date}</label>
        </div>
      );
    });
  }

  return (
    <>
      <Header />
      <div>{errorMessage ? <div>{errorMessage}</div> : renderedVideos}</div>
    </>
  );
}

export default Home;
