class UserContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  onUserChange(user) {
      alert("onUserChange");
  }

  render() {
    return (
      <UserForm
        user={ this.state.user }
        onUserChange={ this.onUserChange }
      />
    );
  }

});
