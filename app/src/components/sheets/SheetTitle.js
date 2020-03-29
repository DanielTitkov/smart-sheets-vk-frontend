import React, { useState, useRef, useEffect } from "react";
import appConfig from "../../config/appConfig";
import "./SheetTitle.css"

const SheetTitle = props => {
    const dataField = appConfig.DEFAULT_DATA_FIELD;
    const { params, data, updateFunction } = props;
    const inputRef = useRef(null);
    const [inputVisible, setInputVisible] = useState(false);
    const [value, setValue] = useState(data ? data[dataField] : params.title);
    const onClickOutSide = (e) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            setInputVisible(false); // Disable text input
        }
    };
    const onClickInside = e => {
        setInputVisible(true);
    };

    useEffect(() => {
        if (inputVisible) {
            document.addEventListener("mousedown", onClickOutSide);
        }
        return () => {
            document.removeEventListener("mousedown", onClickOutSide);
        };
    });

    useEffect(() => {
        updateFunction(value, dataField);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, dataField])

    return (
        <div className="SheetTitle">
            {inputVisible ? (
                <input 
                    autoFocus
                    ref={ inputRef }
                    value={ value } 
                    onChange={ e => setValue(e.target.value) }
                    placeholder="Введите название листочка"
                />
            ) : (
                <h1 onClick={ onClickInside }>{ value ? value : params.title }</h1>
            )}
        </div>
    )
}

export default SheetTitle