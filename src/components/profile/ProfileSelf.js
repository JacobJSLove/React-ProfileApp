import React from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../../actions';

// Self
import './ProfileSelf.scss';

const socialConfig = {
    isFallowed: {
        true: 'following',
        false: 'follow'
    },
    isLiked: {
        true: 'like icon-heart',
        false: 'like icon-heart-empty'
    }
}
const a = Math.floor(Math.random() * 9) + 1;

class ProfileSelf extends React.Component {
    // Social should be in store/db
    state = {
        isLiked: false,
        isFallowed: false,
        likes: 354,
        follows: 3,
        following: 39,
        showModal: false
    }

    componentDidMount() {
        // For now static could be on router from url
        this.props.fetchProfile(a);
    }
    // for now update only state not API
    onFallow = () => {
        let status = this.state.follows + 1;
        if (this.state.isFallowed) {
            status = this.state.follows - 1;
        }
        this.setState(prevState => ({
            isFallowed: !prevState.isFallowed,
            follows: status
        }))
    }
    onLike = () => {
        let status = this.state.likes + 1;
        if (this.state.isLiked) {
            status = this.state.likes - 1;
        }
        this.setState(prevState => ({
            isLiked: !prevState.isLiked,
            likes: status
        }))
    }
    onModalClick = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal,
        }))
    }
    showModal = profile => {
        if (this.state.showModal) {
            return <a href={profile.website} rel="noopener noreferrer" target="_blank" className="popup">{profile.website}</a>
        };
    }

    renderProfile = profile => {
        // add loading placeholder to img
        // descruct profile ?
        // Static country ?
        const className = socialConfig['isLiked'][this.state.isLiked];
        return (
            <figure>
                <img alt={profile.name} width="70px" height="70px" src='https://i.pravatar.cc/70' />
                <figcaption>
                <i onClick={this.onModalClick} className="share icon-export" aria-hidden="true">
                    { this.showModal(profile) }
                </i>
                <div className="profile__header">
                    <h5>{profile.name}</h5>
                    <i onClick={this.onLike} className={className} aria-hidden="true" />
                </div>
                    <p>{profile.address.city}, USA</p>
                </figcaption>
            </figure>
        )
    }

    renderSocial = () => {
        // could be better
        const text = socialConfig['isFallowed'][this.state.isFallowed];
        return (
            <div className="profile__social">
                <ul>
                     <li><span>{this.state.likes}</span><p>Likes</p></li>
                     <li><span>{this.state.follows}</span><p>Following</p></li>
                     <li><span>{this.state.following}</span><p>Followers</p></li>
                </ul>
                <button onClick={this.onFallow}>{text}</button>
            </div>
        )
    }

    render() {
        // To do
        // - safe input controled by react
        // - social from api
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
        profile: state.profile[a]
    };
}

export default connect(mapStateToProps, { fetchProfile })(ProfileSelf);