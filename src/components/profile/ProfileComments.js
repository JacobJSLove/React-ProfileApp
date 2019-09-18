import React from 'react';
import { connect } from 'react-redux';
import { fetchCommentsAndUsers } from '../../actions';
import UserHeader from './UserHeader';
import ImageLoader from './ImageLoader';
import InputForm from './InputForm';

// Self
import './ProfileComments.scss';

const text = {
    true: 'Show comments',
    false: 'Hide comments'
};

class ProfileComments extends React.Component {
    state = {
        hideComments: false
    }

    componentDidMount() {
        this.props.fetchCommentsAndUsers();
    }

    renderComments() {
        return this.props.comments.slice(0, this.props.counter).map(comment => {

            let src = `https://i.pravatar.cc/70?img=${comment.userId}`;
            return (
                <li key={comment.id}>
                    <div className="img__wrapper">
                        <ImageLoader key={comment.id} alt={comment.userId} width="40px" height="40px" src={src} />
                    </div>
                    <article>
                        <UserHeader userId={comment.userId} />
                        <p>{comment.title}</p>
                    </article>
                </li>
            )
        })
    }

    onHideClick = () => {
        this.setState(prevState => ({
            hideComments: !prevState.hideComments
        }))
    }

    render() {
        return (
            <section className="comments">
                <p onClick = {this.onHideClick}
                 className="comments-more">{text[this.state.hideComments]}({this.props.comments.length})</p>
                <ul className = {`${this.state.hideComments}`}>
                  {this.renderComments()}
                </ul>
                <InputForm show={this.state.hideComments}/>
            </section>
        )
    }
}



const mapStateToProps = state => {
    return {
        comments: state.comments,
        users: state.profile
    };
}

export default connect(mapStateToProps, { fetchCommentsAndUsers })(ProfileComments);