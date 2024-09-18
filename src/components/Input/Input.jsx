import "./styles.css";

function Input({ id, name, type, placeholder, label }) {
  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input-field"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
export default Input;
