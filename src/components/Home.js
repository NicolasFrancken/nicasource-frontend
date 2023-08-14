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
      console.log(videos);
    };

    fetch();
  }, []);

  const renderedVideos = videos.map((v) => {
    return (
      <div key={v.id_video}>
        <label>{v.url}</label>
        <h2>{v.title}</h2>
        <label>{v.date}</label>
      </div>
    );
  });

  return <div>{errorMessage ? <div>{errorMessage}</div> : renderedVideos}</div>;
}

export default Home;
