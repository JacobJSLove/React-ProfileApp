import React from 'react';
import ProfileForm from './ProfileForm';
import { connect } from 'react-redux';
import { postComment } from '../../actions';
import PropTypes from 'prop-types';

//self
import './InputForm.scss';

class InputForm extends React.Component {
    onSubmit = comment => {
        this.props.postComment(comment);
    }

    render() {
        return (
            <div data-test="InputComponent" className = { `comments__input-wrapper ${this.props.show}` } >
                <ProfileForm onSubmit={this.onSubmit} initialValues={{ placeholder: "Add a comment" }} />
            </div>
        );
    }

}

// ProfileSelf.propTypes = {
//     profile: PropTypes.object
// };

export default connect(null, {
    postComment
})(InputForm);