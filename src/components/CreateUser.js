var React = require("react");
var UserCreationForm = require("./UserCreationForm");

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user : {name : "", password : "", image : ""}};
    this.createUser = this.createUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  createUser(event) {
    event.preventDefault();
    var user = this.state.user;
    if(user.name != "" && user.password != "" && user.image != ""){
      var headers = new Headers();
      headers.append("Content-Type", "application/json");

      var init = {
        method : 'POST',
        headers : headers,
        mode : 'cors',
        cache : 'default',
        body : JSON.stringify(user) };

      var request = "https://messy.now.sh/join";

      fetch(request, init)
      .then(function(response){
        if(response.ok){
          return response.json();
        }
        else {
          console.log('Erreur lors de la requête de création.');
        }
      })
      .then((json) => {
        console.log(json);
        this.props.onUserCreated(json);
      })
    } else{
      alert('Veuillez remplir les champs.');
    }
  }

  updateUser(event) {
    var user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({ user: user });
  }

  render() {
    return (
      <UserCreationForm
        onUserChange= {this.updateUser}
        onUserInscription={ this.createUser }
      />
    );
  }

}

module.exports = CreateUser;
