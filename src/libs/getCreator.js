import axios from "axios";

async function getCreator(creatorId) {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/creators/creator/${creatorId}`,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return { creator: res.data.result };
  } catch (e) {
    return { message: e.response.data.message };
  }
}

export default getCreator;
