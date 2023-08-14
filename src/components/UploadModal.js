import "./EditModal.css";

import { createPortal } from "react-dom";
import { useState } from "react";
import uploadVideo from "../libs/uploadVideo";

function UploadModal() {
  const [showModal, setShowModal] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [urlValue, setUrlValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTitleInputChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handleUrlInputChange = (event) => {
    setUrlValue(event.target.value);
  };

  const handleUploadClick = () => {
    setShowModal(!showModal);
  };

  const handleUploadSubmit = async (event) => {
    event.preventDefault();

    const res = await uploadVideo(1, urlValue, titleValue);

    if (res.message) {
      setErrorMessage(res.message);
    }

    setShowModal(!showModal);
  };

  const modal = createPortal(
    <>
      <div className="EditModal-grey-container"></div>
      <div className="EditModal-container">
        <form className="EditModal-form" onSubmit={handleUploadSubmit}>
          <input
            placeholder="Title"
            onChange={handleTitleInputChange}
            value={titleValue}
          />
          <input
            placeholder="URL"
            onChange={handleUrlInputChange}
            value={urlValue}
          />
          <button type="submit">Upload</button>
        </form>
      </div>
    </>,
    document.getElementById("modal-root")
  );

  return showModal === true ? (
    modal
  ) : (
    <button className="EditModal-btn" onClick={handleUploadClick}>
      Upload Video
    </button>
  );
}

export default UploadModal;
