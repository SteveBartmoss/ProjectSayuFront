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
    name: 'tasks',
    initialState: firstState,
    reducers: {
        addTask: (state,action)=>{
            state.push(action.payload)
        },
        deleteTask: (state,action)=>{
            return state.filter(element => element.id !== action.payload)
        }
    }
})


export default taskSlice.reducer