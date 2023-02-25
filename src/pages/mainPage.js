import React from 'react';
import {useDispatch, useSelector} from "react-redux";



export default function MainPage() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)

    const increment = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }

    const decrement = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }

    return (
        <>
            <h2>Main Page</h2>
            <h2>{count}</h2>
            <button onClick={increment} >плюс</button>
            <button onClick={decrement} >минус</button>
        </>
    );
}