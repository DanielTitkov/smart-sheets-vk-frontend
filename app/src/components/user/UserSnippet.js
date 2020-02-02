import React from 'react';
import { Group, Cell, Avatar, Div, Button } from '@vkontakte/vkui';
import { connect } from 'react-redux';
import { setActivePanel } from '../../store/actions/panelActions';


const mapDispatchToProps = (dispatch) => {
    return {
		setActivePanel: (panel) => dispatch(setActivePanel(panel)),
    }
}

const UserSnippet = props => {
    const { currentUser, setActivePanel } = props;
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
								level="2" 
								onClick={ () => setActivePanel("profilesettings") } 
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

export default connect(null, mapDispatchToProps)(UserSnippet);