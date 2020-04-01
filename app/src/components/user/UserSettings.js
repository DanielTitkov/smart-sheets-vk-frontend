import React from 'react';
import { List, Cell, Switch } from '@vkontakte/vkui';

const UserSettings = props => {
    return (
        <List>
            <Cell 
                asideContent={ 
                    <Switch 
                        checked={ false } 
                        onChange={ () => {} } 
                    />
                }
            >
                Шифровать тексты
            </Cell>
        </List>
    )
}

export default UserSettings;