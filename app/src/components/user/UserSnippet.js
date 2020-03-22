import React from 'react';
import { Group, Cell, Avatar, Button } from '@vkontakte/vkui';
import { useDispatch } from 'react-redux';
import { setActivePanel } from '../../store/actions/panelActions';


const UserSnippet = props => {
	const dispatch = useDispatch();
    const { currentUser } = props;
    return (
        <div>
            {currentUser &&
			<Group>
				<Cell
					before={currentUser.photo_200 ? <Avatar src={currentUser.photo_200}/> : null}
					size="l"
					description={currentUser.city && currentUser.city.title ? currentUser.city.title : ''}
					asideContent={
						<div style={{ display: 'flex' }}>
							<Button 
								level="3" 
								onClick={ () => dispatch(setActivePanel("profilesettings")) } 
							>
								{ "Profile" } 
							</Button>
						</div>
					}
				>
					{`${currentUser.first_name} ${currentUser.last_name}`}
				</Cell>
			</Group>}
        </div>
    )
}

export default UserSnippet;