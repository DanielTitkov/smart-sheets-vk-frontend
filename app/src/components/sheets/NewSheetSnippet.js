import React from 'react'
import { setActiveSheet } from '../../store/actions/sheetsActions';
import { backgroundImage } from '../../styles/inline';
import { setActivePanel } from '../../store/actions/panelActions';
import { useDispatch } from 'react-redux';
import "./NewSheetSnippet.css";


const NewSheetSnippet = props => {
    const dispatch = useDispatch();
    const { blueprint } = props;
    return (
        <div className="NewSheetSnippet" onClick={ () => {
                dispatch(setActiveSheet(blueprint));
                dispatch(setActivePanel("details"));
            } }>
            <div className="NewSheetSnippet-image" style={ backgroundImage( blueprint.imageUrl) }></div>
            <div className="NewSheetSnippet-content">
                <h4 className="NewSheetSnippet-title">{ blueprint.type }</h4>
                <p className="NewSheetSnippet-desc">{ blueprint.desc }</p>
            </div>
        </div>
    )
}

export default NewSheetSnippet