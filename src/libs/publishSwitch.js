import axios from "axios";

async function publishSwitch(videoId) {
  try {
    const res = await axios.put(
      `http://localhost:5000/api/videos/creator/publish/${videoId}`,
      {},
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return { updatedVideo: res.data.video };
  } catch (e) {
    return { message: e.response.data.message };
  }
}

export default publishSwitch;
