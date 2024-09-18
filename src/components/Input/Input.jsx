import "./styles.css";

function Input({ name, type, placeholder, label }) {
  return (
    <div className="input-wrapper">
      <label className="input-label" for={name}>
        {label}
      </label>
      <input
        className="input-field"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
export default Input;
