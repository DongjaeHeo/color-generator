import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");
  const [weight, setWeight] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color, weight);
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />

        <input
          name="weight"
          type="number"
          value={weight}
          min={1}
          max={20}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="weight"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
