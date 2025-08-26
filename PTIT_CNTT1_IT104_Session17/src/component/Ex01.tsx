import { useState } from "react";

const Info = () => {
  const [name] = useState("Nguyễn Văn A");

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h3>Họ và tên: {name}</h3>
    </div>
  );
}

export default Info;
