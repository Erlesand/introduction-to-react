import { Redirect, useLocation } from "react-router-dom";
import { useAppContext } from "../AppProvider";

export function Login() {
  const location = useLocation();

  // TODO: Get what is needed from AppContext to implement login functionality.
  const { user, loginError, login } = useAppContext();

  // TODO: Check if user already is logged in. If so, redirect to a previous location or home, using the code below:

  if (user) {
    const redirectTo = location.state?.from ?? "/";

    return <Redirect to={redirectTo} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    login(e.target.login.value);
  };

  return (
    <>
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <input id="login" />
      </form>

      {loginError && "Login was incorrect"}
    </>
  );
}
