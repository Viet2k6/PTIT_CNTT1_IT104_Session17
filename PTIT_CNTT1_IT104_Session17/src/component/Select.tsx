import { useState } from "react";

const Select = () => {
  const [city, setCity] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <p style={{ fontFamily: "sans-serif" }}>
        Thành phố: {city !== "" ? city : ""}
      </p>
      <select value={city} onChange={handleChange} style={{ padding: "5px", borderRadius: "4px", border: "1px solid grey" }}>
        <option value="">-- Chọn thành phố --</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="Thanh Hóa">Thanh Hóa</option>
        <option value="Nghệ An">Nghệ An</option>
      </select>
    </div>
  );
}

export default Select;
