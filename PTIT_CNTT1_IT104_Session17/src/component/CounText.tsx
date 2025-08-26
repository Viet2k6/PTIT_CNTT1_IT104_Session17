import { useState } from "react";
const CounText = () => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea 
        value={text} 
        onChange={handleChange} 
        rows={4} 
        cols={50}
      />
      <p style={{ fontFamily: "sans-serif" }}>Số ký tự: {text.length}</p>
    </div>
  );
}

export default CounText;
