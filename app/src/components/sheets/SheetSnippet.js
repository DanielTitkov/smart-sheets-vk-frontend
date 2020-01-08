import React from 'react';
import { Cell, Avatar, Icon24MoreHorizontal, Group, Button } from '@vkontakte/vkui';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import Icon24Delete from '@vkontakte/icons/dist/24/delete';
import { setActivePanel } from '../../store/actions/panelActions';
import { connect } from 'react-redux';
import "./SheetSnippet.css";
import { setActiveSheet } from '../../store/actions/sheetsActions';

const mapDispatchToProps = (dispatch) => {
    return {
        setActivePanel: (panel) => dispatch(setActivePanel(panel)),
        setActiveSheet: (sheet) => dispatch(setActiveSheet(sheet)),
    }
}

const SheetSnippet = props => {
    const { sheet, setActivePanel, setActiveSheet } = props;
    return (
        <div className="SheetSnippet">
            <Cell
                before={
                    sheet.imageURL && <Avatar 
                        type="image"
                        src={ sheet.imageURL } 
                    />
                }
                description={ sheet.type + " | " + sheet.updateTime }
                asideContent={
                    <div className="SheetSnippet-controls">
                        <Button 
                            before={<Icon24Write />}
                            onClick={ () => {
                                setActiveSheet(sheet);
                                setActivePanel("editor");
                            } }
                        >
                            Edit
                        </Button>
                        <Button before={<Icon24Delete />}>Delete</Button>
                    </div>
                }
            >
                { sheet.data[sheet.titleElementId] } 
            </Cell>
        </div>
    )
}

export default connect(null, mapDispatchToProps) (SheetSnippet)