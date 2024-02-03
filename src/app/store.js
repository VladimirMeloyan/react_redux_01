import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users/usersSlice";
import counterSlice from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    users: usersSlice,
    counter: counterSlice,
  },
});

export default store;
