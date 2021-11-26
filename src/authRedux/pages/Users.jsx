import axios from "axios";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Link, Redirect, Route, useRouteMatch } from "react-router-dom";

import { User } from "../components";
import { usersFetch } from "../actions";

let Users = ({ users, status, usersFetch }) => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      const result = await axios("https://jsonplaceholder.cypress.io/users");

      setUsers(result.data);
    }

    fetchUsers();
  }, []);

  const { path, url } = useRouteMatch();

  if (!users) {
    return "Loading users...";
  }

  return (
    <>
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <Route
        path={`${path}/:id`}
        render={({ match }) => {
          const user = users.find((user) => user.id === +match.params.id);

          return user ? <User user={user} /> : <Redirect to="/users" />;
        }}
      />
    </>
  );
};

Users = connect(
  ({ users }) => ({
    users: users.data,
    status: users.status,
  }),
  { usersFetch }
)(Users);

export { Users };
