import React from "react";
import "./Checkbox.css"

type CheckboxProps = {
    checked: boolean;
    onChange: () => void;
}

function Checkbox({checked, onChange} : CheckboxProps){
    return (
        <input className="check__input" type="checkbox" checked={checked} onChange={onChange}  />
    )
}

export default Checkbox;