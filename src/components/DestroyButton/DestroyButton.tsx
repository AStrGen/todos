import React from "react";
import "./DestroyButton.css"

function DestroyButton({onClick}: {onClick:() => void}) {
    return (
        <button className="destroy" onClick={onClick}/>
    )
}

export default DestroyButton;