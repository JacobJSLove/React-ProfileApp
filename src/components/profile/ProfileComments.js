import React from 'react';
import { connect } from 'react-redux';
import { fetchCommentsAndUsers } from '../../actions';
import UserHeader from './UserHeader';
import Image from "react-graceful-image";

// Self
import './ProfileComments.scss';


class ProfileComments extends React.Component {
    componentDidMount() {
        this.props.fetchCommentsAndUsers();
    }

    renderComments() {
        return this.props.comments.slice(0, 5).map(comment => {

            let src = `https://i.pravatar.cc/70?img=${comment.userId}`;
            return (
                <li key={comment.id}>
                    <Image alt={comment.userId} width="40px" height="40px" src={src} />
                    <article>
                        <UserHeader userId={comment.userId} />
                        <p>{comment.body}</p>
                    </article>
                </li>
            )
        })
    }

    render() {
        return (
            <section className="comments">
                <p className="comments-more">Hide comments ({this.props.comments.length})</p>
                <ul>
                  {this.renderComments()}
                </ul>
                <div className="comments__input-wrapper">
                      <input type="text" placeholder="Add a comment" />
                  </div>
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