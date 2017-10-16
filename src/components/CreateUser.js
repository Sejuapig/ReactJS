var React = require("react");
var ReactDOM = require("react-dom");
var UserCreationForm = require("./UserCreationForm");

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
  }

  onUserChange(user) {
      alert("onUserChange");
  }

  render() {
    return (
      <UserCreationForm
        user={ "" }
        onUserChange={ this.onUserChange }
      />
    );
  }

}

module.exports = CreateUser;
