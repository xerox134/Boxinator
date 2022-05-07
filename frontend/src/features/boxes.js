import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBoxes = createAsyncThunk("boxes/getBoxes", async () => {
  const response = await axios.get("http://localhost:8080/rest/boxes");
  return response.data;
});

export const postBoxes = createAsyncThunk("boxes/postBoxes", async (data) => {
  const response = await axios.post("http://localhost:8080/rest/boxes", data);
  return response.data;
});

export const getWeight = createAsyncThunk("boxes/getWeight", async () => {
  const response = await axios.get("http://localhost:8080/rest/boxes/weight");
  return response.data;
});

export const getSum = createAsyncThunk("boxes/getSum", async () => {
  const response = await axios.get("http://localhost:8080/rest/boxes/shipping");
  return response.data;
});

const initialStateValue = {
  status: "",
  box: [],
  totalWeight: 0,
  totalShipping: 0,
};

const boxesSlice = createSlice({
  name: "boxes",
  initialState: { value: initialStateValue },

  extraReducers: {
    //BOXES
    [getBoxes.pending]: (state) => {
      state.value.status = "boxes loading";
    },
    [getBoxes.fulfilled]: (state, { payload }) => {
      state.value.box = payload;
      state.value.status = "";
    },
    [getBoxes.rejected]: (state) => {
      state.value.status = "failed to load boxes!";
    },

    // Weight
    [getWeight.pending]: (state) => {
      state.value.status = "Total weight loading";
    },
    [getWeight.fulfilled]: (state, { payload }) => {
      state.value.totalWeight = payload;
      state.value.status = "";
    },
    [getWeight.rejected]: (state) => {
      state.value.status = "failed to load Weight!";
    },

    //SUM
    [getSum.pending]: (state) => {
      state.value.status = "Total sum loading";
    },
    [getSum.fulfilled]: (state, { payload }) => {
      state.value.totalShipping = payload;
      state.value.status = "";
    },
    [getSum.rejected]: (state) => {
      state.value.status = "failed to load Sum!";
    },

    //Post

    [postBoxes.pending]: (state) => {
      state.value.status = "Posting boxes!";
    },
    [postBoxes.fulfilled]: (state, { payload }) => {
      state.value.status = "Posting boxes Succeed!";
    },
    [postBoxes.rejected]: (state) => {
      state.value.status = "Failed to post boxes!";
    },
  },
});

export default boxesSlice.reducer;
