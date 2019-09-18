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
			<ProfileComments counter='10' />
		</div>

    )
}

export default ShowProfile;