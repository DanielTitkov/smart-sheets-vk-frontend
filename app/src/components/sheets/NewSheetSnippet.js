import React from 'react'
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
    const { blueprint, openModal } = props;
    const modal = <SheetDescModal blueprint={blueprint} />
    return (
        <div className="NewSheetSnippet" onClick={ () => openModal(modal) }>
            <div className="NewSheetSnippet-image" style={ { backgroundImage: 'url(' + blueprint.imageUrl + ')'} }></div>
            <div className="NewSheetSnippet-content">
                <h4 className="NewSheetSnippet-title">{ blueprint.type }</h4>
                <p className="NewSheetSnippet-desc">{ blueprint.desc }</p>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps) (NewSheetSnippet)