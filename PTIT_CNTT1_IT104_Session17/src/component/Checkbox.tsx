import { useState } from "react";

const Checkbox = () => {
  const hobbies = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];
  const [selected, setSelected] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <p>Sở thích: [{selected.map((item) => `"${item}"`).join(", ")}]</p>
      {hobbies.map((hobby) => (
        <div key={hobby}>
          <label>
            <input
              type="checkbox"
              value={hobby}
              checked={selected.includes(hobby)}
              onChange={handleChange}
            />
            {hobby}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Checkbox;
