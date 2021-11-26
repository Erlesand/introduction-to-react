import { Fragment as F } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { authLogout } from "../actions";

let Navigation = ({ user, authLogout, links, style }) => {
  return (
    <nav style={style}>
      {links.map(({ href, name }, i) => (
        <F key={i}>
          <Link to={href}>{name}</Link>
          {i !== links.length - 1 && " "}
        </F>
      ))}
      {user && (
        <button
          onClick={authLogout}
          style={{
            marginLeft: 20,
          }}
        >
          Logout
        </button>
      )}
    </nav>
  );
};

Navigation = connect(
  ({ auth }) => ({
    user: auth.user,
  }),
  { authLogout }
)(Navigation);

export { Navigation };
