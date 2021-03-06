import { createSlice } from "@reduxjs/toolkit";

export const trainerSlice = createSlice({
    name: 'trainer',
    initialState: {
        keysPressedAll: 0,
        keysPressedWrong: 0,
        keysPressedCorrect: 0,
        startTime: 0,
        endTime: 0,
        langCorrect: true
    },
    reducers: {
        keyPressed: (state) => {
            state.keysPressedAll += 1;
        },
        keyPressedWrong: (state) => {
            state.keysPressedWrong += 1;
        },
        keyPressedCorrect: (state) => {
            state.keysPressedCorrect += 1;
        },
        timeStarted: (state, action) => {
            state.startTime = action.payload;
        },
        timeEnded: (state, action) => {
            state.endTime = action.payload;
        },
        setLangCorrect: (state, action) => {
            state.langCorrect = action.payload;
        }
    }
});

export const { keyPressed, keyPressedWrong, keyPressedCorrect, timeStarted, timeEnded, setLangCorrect } = trainerSlice.actions;

export default trainerSlice.reducer;