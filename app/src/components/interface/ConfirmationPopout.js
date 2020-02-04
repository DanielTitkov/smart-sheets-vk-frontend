import React from 'react'
import { Alert } from '@vkontakte/vkui'

const ConfirmationPopout = props => {
    const { onClose, action, title, message } = props;
    return (
        <Alert
            actionsLayout="vertical"
            actions={[{
                title: title,
                autoclose: true,
                mode: 'destructive',
                action: action,
            }, {
                title: 'Отмена',
                autoclose: true,
                mode: 'cancel'
            }]}
            onClose={ () => onClose() }
        >
            <h2>Подтвердите действие</h2>
            <p>{ message }</p>
        </Alert>
    )
}

export default ConfirmationPopout;