import React, { Component } from 'react';

class AccountPage extends Component {
  render() {
    return (
      <div>
        <h1>This is the account page!</h1>
        <p>On this page, you'll be able to do account management stuff, like change your email, password, etc.</p>
        <p>
          Admin users will have access to an admin dashboard where
           they can see and act on items in the moderation queue.
        </p>
      </div>
    );
  }
}

export default AccountPage;
