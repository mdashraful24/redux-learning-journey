import { createSlice } from "@reduxjs/toolkit";

interface initialState {
    priority: string;
}

const initialState = {
    status: "",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {}
});

export default filtersSlice.reducer;
