import "../styles/UploadModal.css";

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
      return;
    }

    setShowModal(!showModal);
  };

  const modal = createPortal(
    <>
      <div className="UploadModal-GreyContainer"></div>
      <div className="UploadModal-Container">
        <form className="UploadModal-Form" onSubmit={handleUploadSubmit}>
          <input
            placeholder="Title"
            onChange={handleTitleInputChange}
            value={titleValue}
            className="UploadModal-Input"
          />
          <input
            placeholder="URL"
            onChange={handleUrlInputChange}
            value={urlValue}
            className="UploadModal-Input"
          />
          <button type="submit" className="UploadModal-SubmitButton">
            Upload
          </button>
        </form>
      </div>
    </>,
    document.getElementById("modal-root")
  );

  return showModal === true ? (
    modal
  ) : (
    <button className="UploadModal-Button" onClick={handleUploadClick}>
      Upload Video
    </button>
  );
}

export default UploadModal;
