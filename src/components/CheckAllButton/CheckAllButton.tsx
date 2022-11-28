import React from "react";
import "./CheckAllButton.css"

function CheckAllButton({onClick}: {onClick:() => void}) {
    return (
        <button className="check-all" onClick={onClick}/>
    )
}

export default CheckAllButton;