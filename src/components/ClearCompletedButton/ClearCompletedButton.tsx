import React from "react";
import "./ClearCompletedButton.css"

function ClearCompletedButton ({onClick}: {onClick:() => void}) {
    return (
        <button className="clear-completed" onClick={onClick}>
            Clear completed
        </button>
    )
}

export default ClearCompletedButton;