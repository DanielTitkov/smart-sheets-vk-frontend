import React from 'react'
import { Cell, Group } from '@vkontakte/vkui';
import RubricSnippet from './RubricSnippet';
import "./RubricsList.css";

const RubricsList = props => {
    const { rubrics } = props;
    return (
        <Group className="RubricsList">
            { rubrics && rubrics.length !== 0 ? (rubrics.map(rubric => {
                    return (
                        <RubricSnippet 
                            rubric={ rubric }
                        />
                    )
                })
            ) : (
                <Cell>
                    <h3>No rubrics =(</h3>
                </Cell>
            ) }
        </Group>
    );
}

export default RubricsList;