import { createSlice } from "@reduxjs/toolkit";

const firstState=[
    {
        id: 1,
        title: "Tarea 1",
        description: "Prueba de tarea",
        state: "creada", 
    }
]

export const taskSlice = createSlice({
    name: 'task',
    initialState: firstState,
    reducers: {

    }
})


export default taskSlice.reducer