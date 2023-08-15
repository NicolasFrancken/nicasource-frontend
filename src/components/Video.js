import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import getVideo from "../libs/getVideo";
import updateVideo from "../libs/updateVideo";
import Header from "./Header";
import deleteVideo from "../libs/deleteVideo";

function Video() {
  const [errorMessage, setErrorMessage] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [urlValue, setUrlValue] = useState("");

  const navigate = useNavigate();
  const { videoId } = useParams();

  const fetch = async () => {
    const res = await getVideo(videoId);

    if (res.message) {
      setErrorMessage(res.message);
      return;
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
      return;
    }

    navigate("/profile/1");
  };

  const handleDeleteClick = async (id) => {
    const res = await deleteVideo(id);

    if (res.message) {
      setErrorMessage(res.message);
      return;
    }

    fetch();
  };

  return (
    <>
      <Header />
      <button onClick={handleDeleteClick}>Delete</button>
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
