import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  fetchData(url) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response;
        })
        .then((response) => response.json())
        .then((users) => this.setState({ users }))
        .catch((e) => console.log(e))
  }

  componentDidMount() {
    this.fetchData('/api/users');
  }

  renderUsers() {
    if (this.state.users === null) {
      return null;
    }

    return this.state.users.map(user => <li>{user.name} {user.surname}</li>);
  }
  render() {
    return (
      <div>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}
