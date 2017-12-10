import React, { Component } from 'react';
import Content from './Content/Content';

export default class App extends Component {
  componentDidMount() {
    this.props.fetchUsers('/api/users');
  }

  renderUsers() {
    const { users } = this.props;

    if (!users || users === null) {
      return null;
    }

    return users.map(user => <Content type="user" {...user} />);
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
      </div>
    );
  }
}
