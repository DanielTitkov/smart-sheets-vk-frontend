import React from 'react'
import Icon24Add from '@vkontakte/icons/dist/36/add';
import { Div, Button, Cell } from '@vkontakte/vkui';
import "./NewSheetSnippet.css";

const NewSheetSnippet = props => {
    const { title, desc, imageURL } = props;
    return (
        <div className="NewSheetSnippet">
            <div className="NewSheetSnippet-image" style={ { backgroundImage: 'url(' + imageURL + ')'} }></div>
            <div className="NewSheetSnippet-content">
                <h4 className="NewSheetSnippet-title">{ title }</h4>
                <p className="NewSheetSnippet-desc">{ desc }</p>
                <Div>
                    <Button before={<Icon24Add/>}>Add item</Button>
                </Div>
            </div>
        </div>
    )
}

export default NewSheetSnippet