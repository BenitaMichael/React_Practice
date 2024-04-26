import React from 'react';
import { LoginContext } from '../context/LoginContextProvider';
import { useContext } from 'react';

const Practice = () => {
    const name = useContext(LoginContext);
    console.log(name)
    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    );
};

export default Practice;

