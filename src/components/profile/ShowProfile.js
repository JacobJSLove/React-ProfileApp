import React from 'react';

// Self
import './ShowProfile.scss';

// Components 
import ProfileSelf from './ProfileSelf';
import ProfileComments from './ProfileComments';

class ShowProfile extends React.Component {
    render() {
        return (
            <div className="container">
				<ProfileSelf />
				<ProfileComments />
			</div>

        )
    }
}

export default ShowProfile;