import React from "react";
import style from "./Login.modules.css";

const Login = (props) => {
  let Username = React.createRef();
  let Password = React.createRef();

  let checkLogin = () => {
    let name = Username.current.value;
    let pass = Password.current.value;

    alert(name + "  " + pass);
  };

  return (
    <div className={style.cntForm} id={style.cntForm}>
      <form action="" method="post">
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          ref={Username}
        />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          ref={Password}
        />

        <button type="button" onClick={checkLogin}>
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
