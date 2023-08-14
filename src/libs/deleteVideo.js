import axios from "axios";

async function deleteVideo(videoId) {
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/videos/creator/${videoId}`,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return { deletedVideo: res.data };
  } catch (e) {
    return { message: e.response.data.message };
  }
}

export default deleteVideo;
