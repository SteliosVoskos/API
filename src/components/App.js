import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    this.props.fetchUsers('/api/users');
  }

  renderUsers() {
    const { users } = this.props;
    
    if (!users || users === null) {
      return null;
    }

    return users.map(user => <li>{user.name} {user.surname}</li>);
  }

  render() {
    return (
      <div>
        {this.props.isLoading && <div>Loading...</div>}
        {this.props.isError && <div>Error</div>}
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}
