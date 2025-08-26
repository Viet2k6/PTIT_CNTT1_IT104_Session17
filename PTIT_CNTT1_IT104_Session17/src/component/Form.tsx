import { useState } from "react";

const Form = () =>  {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <input
        type="text"
        placeholder="Nhập nội dung"
        value={value}
        onChange={handleChange}
        style={{ padding: "5px", borderRadius: "4px", border: "1px solid grey" }}
      />
      <p>{value}</p>
    </div>
  );
}

export default Form;
