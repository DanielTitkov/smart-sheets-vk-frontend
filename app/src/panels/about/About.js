import React from 'react';
import {Panel, PanelHeader, PanelHeaderButton, platform, Footer, IOS, Cell, List, Button } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setActivePanel } from '../../store/actions/panelActions';

const osname = platform();

const About = props => {
    const dispatch = useDispatch();
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={ () => dispatch(setActivePanel("home")) }>
                    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
                О приложении
            </PanelHeader>
            <List>
                <Cell multiline>
                    <h1>Умные листочки</h1>
                    <p>Это приложение - сборник письменных практик для VK.</p>
                    <p>
                        Каждая практика - отдельный "листочек". 
                        Листочки сохраняются при выходе из редактора 
                        (с помощью стрелочки "назад" в шапке или кнопки "сохранить и вернуться" внизу страницы), 
                        а также автоматически каждые 50 секунд. 
                        Их можно создавать в любом количества, всегда можно вернуться к предыдущим.
                    </p>
                    <p>
                        Насчет безопасности: индентификация происходит автоматически по номер пользователя VK, 
                        но сами номера в базе не хранятся, 
                        сохраняются безопасные хэши из них (т.е. восстановить исходный айдишник по хэшу нельзя). 
                        Таким образом, невозможно определить, кто что написал. 
                        В ближайшее время будет поддержано также шифрование текстов на стороне пользователя.
                        Код приложения можно посмотреть в репозитории автора: 
                        <span>&nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/DanielTitkov/smart-sheets-backend">бэкенд</a>
                        </span>
                        <span>&nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/DanielTitkov/smart-sheets-vk-frontend">фронтенд</a>
                        </span>.
                        <br/>Приложение развенуто на Google Cloud Platform. 
                    </p>
                    <p>
                        Приложение пока в стадии тестирования. 
                        Если что-нибудь не работает, напишите автору.
                        Если у вас есть какие-нибудь идеи насчет развития приложения - тоже пишите, пожалуйста.
                    </p>
                </Cell>
                <Cell>
                    <Button 
                        stretched 
                        size="xl"
                        onClick={ () => dispatch(setActivePanel("home")) }
                    >
                        Назад
                    </Button> 
                </Cell>
            </List>
            <Footer>Write for happiness</Footer>
        </Panel>
    )
}

About.propTypes = {
	id: PropTypes.string.isRequired,
};

export default About;