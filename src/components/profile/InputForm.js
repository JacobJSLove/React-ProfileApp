import React from 'react';
import ProfileForm from './ProfileForm';
import { connect } from 'react-redux';
import { postComment } from '../../actions';

//self
import './InputForm.scss';

class InputForm extends React.Component {
    onSubmit = comment => {
        this.props.postComment(comment);
    }

    render() {
        return (
            <div className = { `comments__input-wrapper ${this.props.show}` } >
                <ProfileForm onSubmit={this.onSubmit} initialValues={{ placeholder: "Add a comment" }} />
            </div>
        );
    }

}

export default connect(null, {
    postComment
})(InputForm);