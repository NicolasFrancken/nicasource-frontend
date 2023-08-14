import Header from "./Header";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import getCreatorVideos from "../libs/getCreatorVideos";
import publishSwitch from "../libs/publishSwitch";
import deleteVideo from "../libs/deleteVideo";
import UploadModal from "./UploadModal";

function Profile() {
  const [creatorVideos, setCreatorVideos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const fetch = async () => {
    const res = await getCreatorVideos();

    if (res.message) {
      setErrorMessage(res.message);
      return;
    }

    setCreatorVideos(res.videos);
  };

  useEffect(() => {
    fetch();
  }, []);

  const handlePublishClick = async (id) => {
    const res = await publishSwitch(id);

    if (res.message) {
      setErrorMessage(res.message);
    }

    fetch();
  };

  const handleDeleteClick = async (id) => {
    const res = await deleteVideo(id);

    if (res.message) {
      setErrorMessage(res.message);
    }

    fetch();
  };

  let renderedVideos;
  if (creatorVideos.length === 0) {
    renderedVideos = (
      <div>
        <p>No videos uploaded yet...</p>
      </div>
    );
  } else {
    renderedVideos = creatorVideos.map((v) => {
      return (
        <div key={v.id_video}>
          <button onClick={() => handleDeleteClick(v.id_video)}>Delete</button>
          <iframe
            width="560"
            height="315"
            src={v.url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h3>{v.title}</h3>
          <p>{v.date}</p>
          <button onClick={() => handlePublishClick(v.id_video)}>
            {v.published === true ? "Unpublish" : "Publish"}
          </button>
          <button onClick={() => navigate(`/videos/${v.id_video}`)}>
            Details
          </button>
        </div>
      );
    });
  }

  return (
    <>
      <Header />
      <h2>My Videos</h2>
      {errorMessage ? <div>{errorMessage}</div> : renderedVideos}
      <UploadModal />
    </>
  );
}

export default Profile;
