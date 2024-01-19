import React from 'react'
import "./Button.css"

function Button(props) {
    return (
        <button onClick={props.tarefa} className={props.class}> {props.children} </button>
    )
}

export default Button