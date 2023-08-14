import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import getVideo from "../libs/getVideo";
import updateVideo from "../libs/updateVideo";

function Video() {
  const [errorMessage, setErrorMessage] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [urlValue, setUrlValue] = useState("");

  const { videoId } = useParams();

  const fetch = async () => {
    const res = await getVideo(videoId);

    if (res.message) {
      setErrorMessage(res.message);
    }

    setTitleValue(res.video.title);
    setUrlValue(res.video.url);
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleTitleInputChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handleUrlInputChange = (event) => {
    setUrlValue(event.target.value);
  };

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    console.log(urlValue, titleValue);
    const res = await updateVideo(videoId, urlValue, titleValue);

    if (res.message) {
      setErrorMessage(res.message);
    }

    fetch();
  };

  return (
    <>
      <iframe
        width="560"
        height="315"
        src={urlValue}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <form onSubmit={handleUpdateSubmit}>
        <input value={titleValue} onChange={handleTitleInputChange} />
        <input value={urlValue} onChange={handleUrlInputChange} />
        <button type="submit">Save Changes</button>
      </form>
    </>
  );
}

export default Video;
