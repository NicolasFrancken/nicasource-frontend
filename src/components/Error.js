import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>PAGE NOT FOUND</h2>
      <button
        onClick={() => {
          navigate("/signin");
        }}
      >
        Go back
      </button>
    </div>
  );
}

export default Error;
