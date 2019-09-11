import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    render() {
        if (this.props.profile) {
            let fakeDate = Math.floor(Math.random() * 30) + 1;
            return (
                <header>
	                <h5>{this.props.profile.name}</h5>
	                <span className="date">{ fakeDate }d</span>  
                </header>
            )
        }
        return <div>Loading...</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return { profile: state.profile.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);