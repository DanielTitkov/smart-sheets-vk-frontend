import React from 'react';
// import { Div } from '@vkontakte/vkui';
import { backgroundImage } from '../../styles/inline';
import "./SheetHeader.css";

const SheetHeader = props => {
    const { params } = props
    return params.imageURL ? (
        <div className="SheetHeader-image-wrap" style={ backgroundImage(params.imageURL) }></div>
    ) : null
}

export default SheetHeader