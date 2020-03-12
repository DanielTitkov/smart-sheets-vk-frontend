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
            updateFunction(text !== "" ? text : params.title); // save data
        }
    }

    const onClickInside = e => {
        setInputVisible(true);
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
                <input autoFocus
                    ref={inputRef} // Set the Ref
                    value={text} // Now input value uses local state
                    onChange={ e => setText(e.target.value) }
                    placeholder="Введите название листочка"
                />
            ) : (
                <h1 onClick={onClickInside}>{text ? text : params.title}</h1>
            )}
        </div>
    )
}

export default SheetTitle