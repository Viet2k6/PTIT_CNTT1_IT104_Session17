import { useState } from "react";

const ChangeColor = () => {
  const [color, setColor] = useState("black");
  const handleChangeColor = () => {
    setColor(prevColor => (prevColor === "black" ? "red" : "black"));
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p style={{ color: color }}>Tiêu đề văn bản</p>
      <button
        style={{backgroundColor: "white",border: "1px solid grey",padding: "5px",borderRadius: "4px"}}
        onClick={handleChangeColor}
      >
        Thay đổi màu
      </button>
    </div>
  );
};

export default ChangeColor;
