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
        if (profile) {
            // add loading placeholder to img
            // descruct profile ?
            return (
                <figure>
                    <img alt={profile.name} width="70px" height="70px" src="https://i.pravatar.cc/70?img=12" />
                </figure>
            )
        };
        // <figcaption></figcaption>
        // Need Loader gif/svg
        return <figure>Loading...</figure>

    }

    render() {
        console.log(this.props.profile);
        return (
            <section className="profile">
                 {this.renderProfile(this.props)}
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