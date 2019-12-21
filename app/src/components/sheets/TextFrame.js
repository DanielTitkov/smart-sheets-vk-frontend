import React from 'react';
import { FormLayout, Textarea } from '@vkontakte/vkui';
import './TextFrame.css';

const TextFrame = props => {
    const { title, desc, imageURL } = props
    return (
        <div className="TextFrame">
            <FormLayout>
                <div className="TextFrame-header">
                    { imageURL && (
                        <div className="TextFrame-header-image">
                            <img src={ imageURL } />
                        </div>
                    )}
                    <div className="TextFrame-header-text">
                        <h2>{ title }</h2>
                        <h3>{ desc }</h3>
                    </div>
                </div>
                <Textarea />
            </FormLayout>
        </div>
    )
}

export default TextFrame