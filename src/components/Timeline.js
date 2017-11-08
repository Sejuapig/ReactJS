var React = require("react");
var TimelineView = require("./TimelineView");

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user : {name : "", password : ""}};
    this.connectUser = this.connectUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  displayTimeline(event) {
    var user = this.state.user;
      var headers = new Headers();
      headers.append("Content-Type", "application/json");

      var init = {
        method : 'GET',
        headers : headers,
        mode : 'cors',
        cache : 'default',
        body : JSON.stringify(user) };

      var request = "https://messy.now.sh/u/timeline";

      fetch(request, init)
      .then(function(response){
        if(response.ok){
          return response.json();
        }
        else {
          console.log('Erreur lors de la requête de timeline.');
        }
      })
      .then((json) => {
        console.log(json);
        this.props.onUserConnection(json);
      })

  }

  disconnectUser(event) {
    var user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({ user: user });
  }

  render() {
    return (
      <UserConnectForm
        onUserDisplayTimeline= {this.displayTimeline}
        onUserDisconnection={ this.disconnectUser }
      />
    );
  }

}

module.exports = Timeline;
