import React from 'react';
import { FormLayout, Textarea } from '@vkontakte/vkui';
import './TextFrame.css';

const TextFrame = props => {
    return (
        <div className="TextFrame">
            <FormLayout>
                <div className="TextFrame-header">
                    <div className="TextFrame-header-image">
                        <img src="https://cdn1.ozone.ru/s3/cms/8c/tf2/c500/400400__desk_all.jpg" />
                    </div>
                    <div className="TextFrame-header-text">
                        <h2>Красная шляпа</h2>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi voluptatum corrupti reprehenderit? Aut ad cumque, possimus eum at alias? Ipsum molestias expedita, tempora saepe repudiandae rerum sit laborum. Dolorem?</h3>
                    </div>
                </div>
                <Textarea />
            </FormLayout>
        </div>
    )
}

export default TextFrame