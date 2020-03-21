import React from 'react';
import moment from 'moment';
import { Cell, Avatar, Button } from '@vkontakte/vkui';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import Icon24Delete from '@vkontakte/icons/dist/24/delete';
import { setActivePanel } from '../../store/actions/panelActions';
import { connect } from 'react-redux';
import "./SheetSnippet.css";
import { setActiveSheet, deleteSheet } from '../../store/actions/sheetsActions';
import { getSheetTitle } from '../../utils/sheetsBuilder';
import { openPopout, closePopout } from '../../store/actions/popoutActions';
import ConfirmationPopout from '../interface/ConfirmationPopout';

const mapDispatchToProps = (dispatch) => {
    return {
        setActivePanel: (panel) => dispatch(setActivePanel(panel)),
        setActiveSheet: (sheet) => dispatch(setActiveSheet(sheet)),
        deleteSheet: (sheet) => dispatch(deleteSheet(sheet)),
        openPopout: (popout) => dispatch(openPopout(popout)),
        closePopout: () => dispatch(closePopout()),
    }
}

const SheetSnippet = props => {
    const { 
        sheet, 
        setActivePanel, setActiveSheet, deleteSheet,
        openPopout, closePopout
    } = props;
    const sheetTitle = getSheetTitle(sheet);
    const confirmDeletePopout = <ConfirmationPopout
        onClose={ closePopout }
        action={ () => deleteSheet(sheet) }
        title="Удаление листочка"
        message="Удалить этот листочек?"
    />
    const updated = moment(sheet.updated).format('DD.MM.YYYY hh:mm');

    var avatarStyle = {
        maxHeight: "100%",
        maxWidth: "100%",
        objectFit: "cover",
        objectPosition: "center",
      };

    return (
        <div className="SheetSnippet">
            <Cell
                before={
                    sheet.blueprint.imageUrl && <Avatar 
                        className="SheetSnippet-avatar"
                        type="image"
                        src={ sheet.blueprint.imageUrl } 
                        style={avatarStyle}
                    />
                }
                description={ sheet.blueprint.type + " | " + updated }
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
                        <Button 
                            before={<Icon24Delete />}
                            onClick= { () => openPopout(confirmDeletePopout) }
                        >
                            Delete
                        </Button>
                    </div>
                }
            >
                { sheetTitle } 
            </Cell>
        </div>
    )
}

export default connect(null, mapDispatchToProps) (SheetSnippet)