import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../../features/users/usersSlice";

const Users = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDelete = (user) => {
    dispatch(deleteUser(users.data.find(elem => elem.id === user.id )));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;

    dispatch(addUser({ username }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" id="username" />
        <input type="submit" value="add User" />
      </form>
      <ul>
        {users.data.map((user) => {
          return (
            <li key={user.id}>
              {user.username}
              <button onClick={() => handleDelete(user)}>delete user</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Users;
