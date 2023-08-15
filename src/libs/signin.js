import axios from "axios";

async function signin(email, password) {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/creators/signin",
      {
        email,
        password,
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    return { user: res.data };
  } catch (e) {
    return { message: e.response.data.message };
  }
}

export default signin;
