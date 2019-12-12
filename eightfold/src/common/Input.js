import React from 'react';

const Input = (props) => {

    //Debouncing operation for optimization
    const debounce = (delay) => {
        let timeout;
        return (...args) => {
       
            const key = args[0].target.value;

            const functionCall = () => {
                 const { callBack } = props;
                 callBack(key);
            }
            clearTimeout(timeout);
            timeout = setTimeout(functionCall, delay);
        }
    }
    
    const { placeholder, type, clickCallBack} = props;
    return (
        <input onClick={() => clickCallBack()} type={type} placeholder={placeholder} onChange={debounce(200)} />
    )
}

export default Input;