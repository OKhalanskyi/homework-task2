import React from 'react';
import {useDispatch} from "react-redux";
import {activeTable, archiveTable} from "../../store/slices/tableSlice";

const Header = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>dispatch(activeTable())}>active</button>
            <button onClick={()=>dispatch(archiveTable())}>archive</button>
        </div>
    );
};

export default Header;