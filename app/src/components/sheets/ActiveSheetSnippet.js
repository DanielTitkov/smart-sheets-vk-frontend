import React from 'react';
import { Group, Avatar, Cell, Button, Header } from '@vkontakte/vkui';
import { setActivePanel } from '../../store/actions/panelActions';
import { getSheetTitle } from '../../utils/sheetsBuilder';
import { avatarStyle } from '../../styles/inline';
import { useSelector, useDispatch } from 'react-redux';

const ActiveSheetSnippet = props => {
    const dispatch = useDispatch();
    const activeSheet = useSelector(state => state.sheets.activeSheet);
    return (
        activeSheet ? (
            <Group header={<Header mode="secondary">Активный листочек</Header>}>
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
            </Group>
        ) : (
            null
        )
    )
}

export default ActiveSheetSnippet;