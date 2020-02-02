import React from 'react';
import { connect } from 'react-redux';
import { Group, List, Avatar, Cell, Button } from '@vkontakte/vkui';
import { setActivePanel } from '../../store/actions/panelActions';
import { getSheetTitle } from '../../utils/sheetsBuilder';

const mapStateToProps = (state) => {
	return {
        activeSheet: state.sheets.activeSheet,
        // activeInventoryResponse: state.inventory.activeInventoryResponse
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActivePanel: (panel) => dispatch(setActivePanel(panel)),
    }
}

function ActiveSheetSnippet(props) {
    const { activeSheet, setActivePanel } = props; 
    return (
        activeSheet ? (
            <Group title="Активный листочек">
                <List>
                    <Cell 
                        before={
                            <Avatar 
                                size={72} 
                                src={activeSheet.blueprint.imageUrl}
                            />
                        }
                        multiline
                        size='l'
                        description={ 
                            activeSheet.blueprint.type
                        }
                        bottomContent={
                            <div>
                                <Button onClick={ () => setActivePanel("editor") }>Продолжить</Button>
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

export default connect(mapStateToProps, mapDispatchToProps) (ActiveSheetSnippet);