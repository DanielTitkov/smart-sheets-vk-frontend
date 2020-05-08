import React from 'react';
import { Group, Cell, Avatar, Button } from '@vkontakte/vkui';
import { useDispatch } from 'react-redux';
import { setActivePanel } from '../../store/actions/panelActions';
import "./UserSnippet.css";


const UserSnippet = props => {
	const dispatch = useDispatch();
    const { currentUser } = props;
    return (currentUser && currentUser.profile &&
		<Group>
			<Cell
				before={ currentUser.profile.photo_200 ? <Avatar src={ currentUser.profile.photo_200 }/> : null }
				size="l"
				description={ currentUser.profile.city && currentUser.profile.city.title ? currentUser.profile.city.title : '' }
				asideContent={
					<div style={ { display: 'flex' } }>
						<Button 
							className="UserSnippet-button"
							mode="tertiary"
							onClick={ () => dispatch(setActivePanel("about")) } 
						>
							О приложении
						</Button>
						<Button 
							className="UserSnippet-button"
							mode="tertiary"
							onClick={ () => dispatch(setActivePanel("profilesettings")) } 
						>
							Профиль 
						</Button>
					</div>
				}
			>
				{`${currentUser.profile.first_name} ${currentUser.profile.last_name}`}
			</Cell>
		</Group>
    )
}

export default UserSnippet;