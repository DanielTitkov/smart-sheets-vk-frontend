import React from 'react'
import { Cell, Card, CardGrid, Group } from '@vkontakte/vkui';
import RubricSnippet from './RubricSnippet';
import { backgroundImage } from '../../../styles/inline';
import "./RubricsList.css";

const RubricsList = props => {
    const { rubrics } = props;
    return (
        <Group separator="hide" className="RubricsList">
            <CardGrid>
                { rubrics && rubrics.length !== 0 ? (rubrics.map(rubric => {
                        return (
                            <Card 
                                className="RubricsList-card"
                                size={ rubric.cardSize || "l" }
                                style={ backgroundImage( rubric.imageUrl) }
                                key={ rubric.id }
                            >
                                <RubricSnippet 
                                    rubric={ rubric }
                                />
                            </Card>
                        )
                    })
                ) : (
                    <Cell>
                        <h3>No rubrics =(</h3>
                    </Cell>
                ) }
            </CardGrid>
        </Group>
    );
}

export default RubricsList;