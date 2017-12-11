import React, { Component } from 'react';
import Content from './Content/Content';

export default class App extends Component {
  componentDidMount() {
    this.props.fetchUsers('/api/users');
  }

  handleUserCommentsDisplay = (id) => {
    this.props.fetchCommentsForUser('/api/users/comments/', id);
  }

  renderUsers() {
    const { users } = this.props;

    if (!users || users === null) {
      return null;
    }

    return users.map(user => <Content key={user.id} type="user" {...user} onCommentsDisplayClick={() => this.handleUserCommentsDisplay(user.id)} />);
  }

  renderCommentsForUser() {
    const { comments } = this.props;
    
    if (!comments || comments === null) {
      return null;
    }
    return comments.map(comment => <Content type="post" key={comment.commentId} {...comment} />)
  }

  render() {
    const styles = {
      backgroundColor: '#FDFDFD'
    };

    return (
      <div style={styles}>
        {this.props.isLoading && <div>Loading...</div>}
        {this.props.isError && <div>Error</div>}
        {this.renderUsers()}
        {this.props.isCommentsArrayEmpty ? <div>No comments!</div> : this.renderCommentsForUser()}
      </div>
    );
  }
}
