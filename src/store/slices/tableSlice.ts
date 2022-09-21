import {createSlice} from "@reduxjs/toolkit";

interface TableSlice{
    activeTable:boolean
}

const initialState: TableSlice = {
    activeTable:true
}

const tableSlice = createSlice({
    name:"table",
    initialState,
    reducers:{
        activeTable(state){
            state.activeTable = true
        },
        archiveTable(state){
            state.activeTable = false
        }
    }
})
export const {activeTable, archiveTable} = tableSlice.actions
export default tableSlice.reducer