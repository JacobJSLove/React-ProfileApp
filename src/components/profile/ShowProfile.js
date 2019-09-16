import React from 'react';

// Self
import './ShowProfile.scss';

// Components 
import ProfileSelf from './ProfileSelf';
import ProfileComments from './ProfileComments';

const ShowProfile = () => {
    return (
        <div className="container">
			<ProfileSelf />
			<ProfileComments />
		</div>

    )
}

export default ShowProfile;