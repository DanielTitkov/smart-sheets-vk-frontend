import React from 'react';
import { Div } from '@vkontakte/vkui';
import { backgroundImage } from '../../styles/inline';
import "./SheetHeader.css";

const SheetHeader = props => {
    const { params } = props
    return params.imageURL ? (
        <Div className="SheetHeader-image-wrap" style={ backgroundImage(params.imageURL) }>
        </Div>
    ) : null
}

export default SheetHeader