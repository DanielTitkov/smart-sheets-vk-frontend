import React, { useState, useRef, useEffect } from "react";
import "./SheetTitle.css"

const SheetTitle = props => {
    const { params, data, updateFunction } = props;
    const inputRef = useRef(null);
    const [inputVisible, setInputVisible] = useState(false);
    const [text, setText] = useState(data ? data : params.title);

    function onClickOutSide(e) {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            setInputVisible(false); // Disable text input
            updateFunction(text); // save data
        }
    }

    useEffect(() => {
        if (inputVisible) {
            document.addEventListener("mousedown", onClickOutSide);
        }
    
        return () => {
            document.removeEventListener("mousedown", onClickOutSide);
        };
    });

    return (
        <div className="SheetTitle">
            {inputVisible ? (
                <input
                    ref={inputRef} // Set the Ref
                    value={text} // Now input value uses local state
                    onChange={ e => setText(e.target.value) }
                />
            ) : (
                <h1 onClick={() => setInputVisible(true)}>{text}</h1>
            )}
        </div>
    )
}

export default SheetTitle