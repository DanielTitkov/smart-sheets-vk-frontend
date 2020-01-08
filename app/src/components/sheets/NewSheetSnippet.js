import React from 'react'
import Icon24Add from '@vkontakte/icons/dist/36/add';
import { Div, Button, Cell } from '@vkontakte/vkui';
import "./NewSheetSnippet.css";
import { openModal, closeModal } from '../../store/actions/modalActions';
import { connect } from 'react-redux';
import SheetDescModal from './modals/SheetDescModal';

const mapDispatchToProps = (dispatch) => {
    return {
		openModal: (modal) => dispatch(openModal(modal)),
		closeModal: () => dispatch(closeModal()),
    }
}

const NewSheetSnippet = props => {
    const { sheet, openModal, closeModal } = props;
    const modal = <SheetDescModal sheet={sheet} />
    return (
        <div className="NewSheetSnippet" onClick={ () => openModal(modal) }>
            <div className="NewSheetSnippet-image" style={ { backgroundImage: 'url(' + sheet.imageURL + ')'} }></div>
            <div className="NewSheetSnippet-content">
                <h4 className="NewSheetSnippet-title">{ sheet.type }</h4>
                <p className="NewSheetSnippet-desc">{ sheet.desc }</p>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps) (NewSheetSnippet)