import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { nanoid } from "nanoid";

export const getUsersJSON = createAsyncThunk('users/getAcyncUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data
})

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {
    deleteUser(state, action) {
        console.log(action);
        state.data.toSpliced(action.payload, 1)
    },
    addUser(state, action) {
        console.log(action);
      state.data.push({
        id: nanoid(),
        username: action.payload.username
    });
    },
  },
  extraReducers(builder) {
    builder
    .addCase(getUsersJSON.fulfilled, (state, action) => {
        state.data = action.payload
    })
  }
});

export default usersSlice.reducer;
export const { deleteUser } = usersSlice.actions;
export const { addUser } = usersSlice.actions;
