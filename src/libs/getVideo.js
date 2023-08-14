import axios from "axios";

async function getVideo(videoId) {
  try {
    const res = await axios.get(`http://localhost:5000/api/videos/${videoId}`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return { video: res.data };
  } catch (e) {
    return { message: e.response.data.message };
  }
}

export default getVideo;
