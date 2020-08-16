import React from "react";
import style from "./Login.modules.css";

const Login = (props) => {
  return (
    <div className={style.cntForm} id={style.cntForm}>
      <form action="" method="post">
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input type="text" name="username" placeholder="Enter Username" />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input type="password" name="password" placeholder="Enter Password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
