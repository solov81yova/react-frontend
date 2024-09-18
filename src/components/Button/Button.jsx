import "./styles.css";

function Button({ name, type }) {
//   const buttonName = {
//     name: "Login",
//     type: "submit",
//   };
  return (
    <button className="button-component" type={type}>
      {name}
    </button>
  );
}

export default Button;
