import React from 'react';

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


export default Header;