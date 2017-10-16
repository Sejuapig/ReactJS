var React = require("react");
var UserCreationForm = require("./UserCreationForm");

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.onUserInscription = this.onUserInscription.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  onUserInscription(event) {
    event.preventDefault();
  }

  updateUser (event) {
    var user = this.state.user;
    user[event.target.name] = event.target.value;

    this.setState({ user: user });
  }

  render() {
    return (
      <UserCreationForm
      onUserChange= {this.updateUser}
        onUserInscription={ this.onUserInscription }
      />
    );
  }

}

module.exports = CreateUser;
