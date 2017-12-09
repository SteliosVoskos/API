import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    this.props.fetchUsers('/api/users');
  }

  renderUsers() {
    if (!this.props.users || this.props.users === null) {
      return null;
    }

    return this.props.users.map(user => <li>{user.name} {user.surname}</li>);
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
