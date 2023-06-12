import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  function toRegister() {
    navigate("/register");
  }
  return (
    <div className="login">
      <div className="form">
        <form noValidate>
          <span>Login</span>

          <input
            type="email"
            name="email"
            placeholder="Enter email id / username"
            className="form-control inp_text"
            id="email"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="form-control"
          />

          <button type="submit">Login</button>
          <button onClick={toRegister} style={{ marginTop: "30px" }}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
