import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./styles.css";

function LoginForm() {
  const titleForForm = {
    title: "Login form",
  };

  const buttonName = {
    btnName: "Login",
    btnType: "submit",
  };

  const inputEmail = {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
  };

  const inputPass = {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">{titleForForm.title}</h2>
        <Input
          name={inputEmail.name}
          type={inputEmail.type}
          placeholder={inputEmail.placeholder}
          label={inputEmail.label}
        />
        <Input
          name={inputPass.name}
          type={inputPass.type}
          placeholder={inputPass.placeholder}
          label={inputPass.label}
        />
        <Button name={buttonName.btnName} />
      </div>
    </div>
  );
}

export default LoginForm;
