import React from 'react';
import { connect } from 'react-redux';
import { Group, List, Avatar, Cell, Button } from '@vkontakte/vkui';
import { setActivePanel } from '../../store/actions/panelActions';

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
                        before={<Avatar size={72} />}
                        multiline
                        size='l'
                        description={ 
                            activeSheet.type
                        }
                        bottomContent={
                            <div>
                                <Button onClick={ () => setActivePanel("editor") }>Продолжить</Button>
                            </div>
                        }
                    >
                        { activeSheet.data[activeSheet.titleElementId] }
                    </Cell>
                </List>
            </Group>
        ) : (
            null
        )
    )
}

export default connect(mapStateToProps, mapDispatchToProps) (ActiveSheetSnippet);