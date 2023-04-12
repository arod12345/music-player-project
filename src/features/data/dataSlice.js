import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    playSign: false,
    toolMenu: false,
    favIcon: false,
    isPlaying: false,
    editing: false
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        handlePlaySign: (state) => {
            state.playSign = !state.playSign
        }
    }
})

export const { handlePlaySign } = dataSlice.actions
export default dataSlice.reducer