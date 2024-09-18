import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./styles.css";

function LoginForm() {
  //закомментированные строки оставлены как второй способ решения
  //   const titleForForm = {
  //     title: "Login form",
  //   };

  //   const buttonName = {
  //     btnName: "Login",
  //     btnType: "submit",
  //   };

  //   const inputEmail = {
  //     name: "email",
  //     type: "email",
  //     placeholder: "Enter your email",
  //     label: "Email",
  //   };

  //   const inputPass = {
  //     name: "password",
  //     type: "password",
  //     placeholder: "Enter your password",
  //     label: "Password",
  //   };

  return (
    <div className="login-container">
      <div className="login-form">
        {/* <h2 className="login-title">{titleForForm.title}</h2> */}
        <h2 className="login-title">Login form</h2>
        <Input
          //   name={inputEmail.name}
          name="email"
          //   type={inputEmail.type}
          type="email"
          //   placeholder={inputEmail.placeholder}
          placeholder="Enter your email"
          //   label={inputEmail.label}
          label="Email"
        />
        <Input
          //   name={inputPass.name}
          name="password"
          //   type={inputPass.type}
          type="password"
          //   placeholder={inputPass.placeholder}
          placeholder="Enter your password"
          //   label={inputPass.label}
          label="Password"
        />
        {/* <Button name={buttonName.btnName} type={buttonName.btnType} /> */}
        <Button name="Login" type="submit" />
      </div>
    </div>
  );
}

export default LoginForm;
