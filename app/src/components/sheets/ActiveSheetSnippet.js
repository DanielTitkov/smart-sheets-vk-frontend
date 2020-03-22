import React from 'react';
import { Group, List, Avatar, Cell, Button } from '@vkontakte/vkui';
import { setActivePanel } from '../../store/actions/panelActions';
import { getSheetTitle } from '../../utils/sheetsBuilder';
import { avatarStyle } from '../../styles/inline';
import { useSelector, useDispatch } from 'react-redux';

const ActiveSheetSnippet = props => {
    const dispatch = useDispatch();
    const activeSheet = useSelector(state => state.sheets.activeSheet);
    return (
        activeSheet ? (
            <Group title="Активный листочек">
                <List>
                    <Cell 
                        before={
                            <Avatar 
                                size={72} 
                                src={activeSheet.blueprint.imageUrl}
                                style={ avatarStyle }
                            />
                        }
                        multiline
                        size='l'
                        description={ 
                            activeSheet.blueprint.type
                        }
                        bottomContent={
                            <div>
                                <Button onClick={ () => dispatch(setActivePanel("editor")) }>Продолжить</Button>
                            </div>
                        }
                    >
                        { getSheetTitle(activeSheet) }
                    </Cell>
                </List>
            </Group>
        ) : (
            null
        )
    )
}

export default ActiveSheetSnippet;