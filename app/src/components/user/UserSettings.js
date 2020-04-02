import React, { useState } from 'react';
import { List, Cell, Switch, FormLayout, FormLayoutGroup, Input  } from '@vkontakte/vkui';

const UserSettings = props => {
    const { settings } = props;
    const [ encrypt, setEncrypt ] = useState(settings.encrypt);
    return (
        <List>
            <Cell 
                asideContent={ 
                    <Switch 
                        checked={ encrypt } 
                        onChange={ () => { setEncrypt(!encrypt) } } 
                    />
                }
            >
                Шифровать тексты
            </Cell>{
                encrypt ? (
                    <FormLayout>
                        <FormLayoutGroup 
                            top="Укажите пароль для шифрования"
                            bottom="Хорошо запомните пароль. Он не хранится на сервере и используется для шифрования ваших текстов (не для доступа к приложению). Если вы потеряете пароль, восстановить зашифрованные тексты будет невозможно."
                        >
                            <Input type="text" defaultValue="" />
                        </FormLayoutGroup>
                    </FormLayout>
                ) : (null)
            }

        </List>
    )
}

export default UserSettings;