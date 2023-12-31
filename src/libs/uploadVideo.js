import axios from "axios";

async function uploadVideo(creatorId, url, title) {
  try {
    const res = await axios.post(
      `http://localhost:5000/api/videos/creator/${creatorId}`,
      {
        url,
        title,
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return { videos: res.data };
  } catch (e) {
    return { message: e.response.data.message };
  }
}

export default uploadVideo;
