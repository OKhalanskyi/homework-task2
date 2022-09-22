import React from 'react';
import {useDispatch} from "react-redux";
import {activeTable, archiveTable} from "../../store/slices/tableSlice";
import styles from './Header.module.scss'
import {useAppSelector} from "../../hooks/useAppSelector";

const Header = () => {
    const dispatch = useDispatch()
    const active = useAppSelector(state => state.tables.activeTable)
    return (
        <div className={styles.header}>
            <button className={active?styles.active:styles.activeChosen} onClick={()=>dispatch(activeTable())}>active</button>
            <button className={active?styles.activeChosen:styles.active} onClick={()=>dispatch(archiveTable())}>archive</button>
        </div>
    );
};

export default Header;