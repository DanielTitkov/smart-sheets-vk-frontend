import React from 'react'
import { useDispatch } from 'react-redux';
import { avatarStyle } from '../../../styles/inline';
import Icon28ChevronRightOutline from '@vkontakte/icons/dist/28/chevron_right_outline';
import { setActivePanel } from '../../../store/actions/panelActions';
import { Avatar, RichCell } from '@vkontakte/vkui';
import "./RubricSnippet.css";
import { setActiveRubric } from '../../../store/actions/sheetsActions';


const RubricSnippet = props => {
    const dispatch = useDispatch();
    const { rubric } = props;
    return (
        <RichCell 
            disabled
            className="RubricSnippet" 
            multiline
            before={<Avatar style={ avatarStyle } src={ rubric.imageUrl } />}
            caption={ rubric.desc }
            after={
                <Icon28ChevronRightOutline 
                    onClick={ () => {
                        dispatch(setActiveRubric(rubric));
                        if (rubric.hasChildren) {
                            dispatch(setActivePanel("rubrics"));
                        } else {
                            dispatch(setActivePanel("catalog"));
                        }
                    } }
                />
            }
        >
            { rubric.title }
        </RichCell>
    )
}

export default RubricSnippet;