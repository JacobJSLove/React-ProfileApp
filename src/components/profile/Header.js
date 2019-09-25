import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    if (props.profile) {
        return (
            <header>
                <h5>{props.profile.name}</h5>
                <span className="date">{ props.date }d</span>  
            </header>
        )
    };
    return <div>Loading...</div>
}

Header.propTypes = {
    profile: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object, PropTypes.array])),
    date: PropTypes.number
};
export default Header;