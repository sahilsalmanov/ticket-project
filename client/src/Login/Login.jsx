import { useState } from "react";
import Footer from "../components/Footer/Footer";
import InnerNav from "../components/Nav/InnerNav";
// import "./Login.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function toRegister(e) {
    e.preventDefault();
    navigate("/register");
  }

  function loginSave(e) {
    e.preventDefault();
    axios
      .get("http://localhost:3000/api/users")
      .then((response) => {
        let a = response.data;
        console.log(a);
        console.log(a.length);
        let counter = 0;
        a.map((item) => {
          if (item.email == email && item.password == password) {
            alert("You are registered");
            localStorage.setItem("isLoggedIn", true);
            navigate("/");
          } else {
            counter++;
          }
        });
        if (counter == a.length) {
          alert("Email or password is invalid");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    console.log("email", email, "password", password);
  }
  return (
    <>
      <InnerNav />
      <div className="login">
        <div className="form">
          <form noValidate>
            <span>Login</span>
            <input
              type="email"
              name="email"
              placeholder="Enter email id / username"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={loginSave} type="submit">
              Login
            </button>
            <button onClick={toRegister} style={{ marginTop: "30px" }}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;



