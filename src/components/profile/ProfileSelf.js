import React from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../../actions';

// Self
import './ProfileSelf.scss';

class ProfileSelf extends React.Component {
    componentDidMount() {
        // For now static could be on router from url
        this.props.fetchProfile('1');
    }
    renderProfile = profile => {
        // add loading placeholder to img
        // descruct profile ?
        // Static country ?
        return (
            <figure>
                <img alt={profile.name} width="70px" height="70px" src="https://i.pravatar.cc/70?img=12" />
                <figcaption>
                <i className="share icon-export" aria-hidden="true">
                    <span className="popup">www.mike-ross.com</span>
                </i>
                <div className="profile__header">
                    <h5>{profile.name}</h5>
                    <i className="like icon-heart-empty" aria-hidden="true" />
                </div>
                    <p>{profile.address.city}, USA</p>
                </figcaption>
            </figure>
        )
    }

    renderSocial = () => {
        return (
            
        )
    }

    render() {
        // To do
        // - safe input controled by react
        // - social from api
        console.log(this.props.profile);
        if (this.props.profile) {
            return (
                <section className="profile">
                    {this.renderProfile(this.props.profile)}
                    {this.renderSocial()}
                </section>
            )
        }
        // Need good Loader gif/svg
        return (
            <section className="profile loading">
                <h1>Loading...</h1>
            </section>
        )
    }
}


const mapStateToProps = state => {
    return {
        profile: state.profile['1']
    };
}

export default connect(mapStateToProps, { fetchProfile })(ProfileSelf);