import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const Teacher = createSlice({
    name: "Teacher",
    initialState,
    reducers: {
        setTeacher: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setTeacher } = Teacher.actions;

export default Teacher.reducer;