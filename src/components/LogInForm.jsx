import React from 'react'
import { LogIn, userLog, getUserId } from "../supabase";
import st from "../style/LogInMagicForm.module.scss";

const LogInForm = ({
  userEmail,
  userPass,
  setUserEmail,
  setUserPass,
  setUserLogIn,
}) => {


  return (
    <form id="logIn" className={st.login__form}>
      <input
        className={st.input}
        type="text"
        value={userEmail}
        onChange={(e) => {
          setUserEmail(e.target.value);
        }}
        placeholder="Email"
      ></input>
      <input
        className={st.input}
        type="password"
        value={userPass}
        onChange={(e) => {
          setUserPass(e.target.value);
        }}
        placeholder="Password"
      ></input>
      <button
        className={st.button}
        onClick={(e) => {
          LogIn(e, userEmail, userPass);
        }}
      >
        go in
      </button>
    </form>
  );
};

export default LogInForm