import { useContext } from 'react';
import { Context } from '../context/AppContext';

export default function Room() {

    const { message } = useContext(Context)
   
    return (
        <>
            <h1>{ message }</h1>
        </>
    )
};
