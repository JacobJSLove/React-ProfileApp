import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    render() {
        let fakeDate = Math.floor(Math.random() * 30) + 1;
        return <Header profile={this.props.profile} date={fakeDate} />
    }

}

const mapStateToProps = (state, ownProps) => {
    return { profile: state.profile.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);