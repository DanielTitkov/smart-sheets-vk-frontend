import React from 'react';
import moment from 'moment';
import { Cell, Avatar, Button } from '@vkontakte/vkui';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import Icon24Delete from '@vkontakte/icons/dist/24/delete';
import { setActivePanel } from '../../store/actions/panelActions';
import { useDispatch } from 'react-redux';
import { setActiveSheet, deleteSheet } from '../../store/actions/sheetsActions';
import { getSheetTitle } from '../../utils/sheetsBuilder';
import { openPopout, closePopout } from '../../store/actions/popoutActions';
import ConfirmationPopout from '../interface/ConfirmationPopout';
import { avatarStyle } from '../../styles/inline';
import "./SheetSnippet.css";


const SheetSnippet = props => {
    const dispatch = useDispatch();
    const { sheet } = props;
    const sheetTitle = getSheetTitle(sheet);
    const confirmDeletePopout = <ConfirmationPopout
        onClose={ () => dispatch(closePopout()) }
        action={ () => dispatch(deleteSheet(sheet)) }
        title="Удаление листочка"
        message="Удалить этот листочек?"
    />
    const updated = moment(sheet.updated).format('DD.MM.YYYY hh:mm');

    return (
        <div className="SheetSnippet">
            <Cell
                before={
                    sheet.blueprint.imageUrl && <Avatar 
                        className="SheetSnippet-avatar"
                        type="image"
                        src={ sheet.blueprint.imageUrl } 
                        style={ avatarStyle }
                    />
                }
                description={ sheet.blueprint.type + " | " + updated }
                asideContent={
                    <div className="SheetSnippet-controls">
                        <Button 
                            before={<Icon24Write />}
                            onClick={ () => {
                                dispatch(setActiveSheet(sheet));
                                dispatch(setActivePanel("editor"));
                            } }
                        >
                            Edit
                        </Button>
                        <Button 
                            before={<Icon24Delete />}
                            onClick= { () => dispatch(openPopout(confirmDeletePopout)) }
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

export default SheetSnippet;