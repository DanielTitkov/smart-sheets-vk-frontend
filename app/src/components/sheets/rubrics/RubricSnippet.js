import React from 'react'
import { useDispatch } from 'react-redux';
import { backgroundImage, avatarStyle } from '../../../styles/inline';
import { setActivePanel } from '../../../store/actions/panelActions';
import { Avatar, Div } from '@vkontakte/vkui';
import "./RubricSnippet.css";


const RubricSnippet = props => {
    const dispatch = useDispatch();
    const { rubric } = props;
    return (
        <Div className="RubricSnippet" onClick={ () => {
                {/* dispatch(setActiveSheet(blueprint)); */}
                dispatch(setActivePanel("catalog"));
            } }>
            <h3>{ rubric.title }</h3>
            <p>{ rubric.desc }</p>
        </Div>
    )
}

export default RubricSnippet;