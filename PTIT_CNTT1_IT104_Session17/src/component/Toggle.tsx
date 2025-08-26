import { useState } from "react";
const Toggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button style={{ backgroundColor: "white", border: "1px solid grey", padding: "7px", borderRadius: "4px" }} onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Ẩn" : "Hiện"}
      </button>
      {isVisible ? <p style={{ fontFamily: "sans-serif" }}>Tiêu đề văn bản</p> : null}
    </div>
  );
}

export default Toggle;
