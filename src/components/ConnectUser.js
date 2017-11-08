var React = require("react");
var UserConnectForm = require("./UserConnectForm");

class ConnectUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user : {name : "", password : ""}};
    this.connectUser = this.connectUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  connectUser(event) {
    event.preventDefault();
    var user = this.state.user;
    if(user.name != "" && user.password != ""){
      var headers = new Headers();
      headers.append("Content-Type", "application/json");

      var init = {
        method : 'POST',
        headers : headers,
        mode : 'cors',
        cache : 'default',
        body : JSON.stringify(user) };

      var request = "https://messy.now.sh/authenticate";

      fetch(request, init)
      .then(function(response){
        if(response.ok){
          return response.json();
        }
        else {
          console.log('Erreur lors de la requête de connexion.');
        }
      })
      .then((json) => {
        console.log(json);
        this.props.onUserConnection(json);
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
      <UserConnectForm
        onUserChange= {this.updateUser}
        onUserConnection={ this.connectUser }
      />
    );
  }

}

module.exports = ConnectUser;
