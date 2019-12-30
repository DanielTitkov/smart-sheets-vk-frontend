import React, { useState } from 'react'
import ModalPageHeader from '@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader';
import { IS_PLATFORM_ANDROID, IS_PLATFORM_IOS } from '@vkontakte/vkui/dist/lib/platform';
import { ModalRoot, ModalPage, HeaderButton, List, Cell, InfoRow, Div, Button } from '@vkontakte/vkui';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import { openModal, closeModal } from '../../../store/actions/modalActions';
import { connect } from 'react-redux';
import "./SheetDescModal.css";

const MODAL_PAGE_SHEET_DESC = "modal_page_sheet_desc";
const MODALS_ORDER = [
    MODAL_PAGE_SHEET_DESC,
];

const mapDispatchToProps = (dispatch) => {
    return {
		openModal: (modal) => dispatch(openModal(modal)),
		closeModal: () => dispatch(closeModal()),
    }
}

const SheetDescModal = props => {
    const { sheet, closeModal } = props;
    return (
        <ModalRoot activeModal={ MODALS_ORDER[0] }>
            <ModalPage
                id={MODAL_PAGE_SHEET_DESC}
                header={
                    <ModalPageHeader
                    left={(
                        <React.Fragment>
                        {IS_PLATFORM_ANDROID && <HeaderButton onClick={closeModal}><Icon24Cancel /></HeaderButton>}
                        </React.Fragment>
                    )}
                    right={(
                        <React.Fragment>
                        {IS_PLATFORM_ANDROID && <HeaderButton onClick={closeModal}><Icon24Done /></HeaderButton>}
                        {IS_PLATFORM_IOS && <HeaderButton onClick={closeModal}><Icon24Dismiss /></HeaderButton>}
                        </React.Fragment>
                    )}
                    >
                        { sheet.title }
                    </ModalPageHeader>
                }
                onClose={closeModal}
                settlingHeight={80}
            >
                <List>
                    <Cell className="SheetDescModal-image">
                        <img src={ sheet.imageURL } />
                    </Cell>
                    <Cell>
                        <InfoRow title="Название">
                            { sheet.title }
                        </InfoRow>
                    </Cell>
                    <Cell>
                        <InfoRow title="Описание">
                            { sheet.desc }
                        </InfoRow>
                    </Cell>
                </List>
                <Div>
                    <Button 
                        stretched 
                        size="xl"
                        onClick={closeModal}
                    >
                        Выбрать!
                    </Button>
                </Div>
            </ModalPage>
        </ModalRoot>
    )
}

export default connect(null, mapDispatchToProps) (SheetDescModal);