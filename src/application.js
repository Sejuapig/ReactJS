var React = require("react");
var ReactDOM = require("react-dom");
var CreateUser = require("./components/CreateUser");
var ConnectUser = require("./components/ConnectUser");

class Application extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      token : ""
    };
  }

  render(){
    if(this.state.token != "" && sessionStorage.getItem('isConnected') == false) {
      return (
        <ConnectUser onUserConnection={
          (obj) => {
            sessionStorage.setItem('isConnected', 'true');
            sessionStorage.setItem('token', obj.token);
            sessionStorage.setItem('user', obj.user);
            this.setState({token : obj.token, user : obj.user})
            console.log("------------Connection Utilisateur------------")
          }
        }/>
      );
    } else{
      return [
        <CreateUser onUserCreated={
          (obj) => {
            sessionStorage.setItem('token', obj.token);
            sessionStorage.setItem('user', obj.user);
            this.setState({token : obj.token, user : obj.user})
            console.log("------------Creation Utilisateur------------");
          }
        }/>,
        <br/>,

        <ConnectUser onUserConnection={
          (obj) => {
            sessionStorage.setItem('isConnected', 'true');
            sessionStorage.setItem('token', obj.token);
            sessionStorage.setItem('user', obj.user);
            this.setState({token : obj.token, user : obj.user})
            console.log("------------Connection Utilisateur------------")
          }
        }/>
      ];
    }

  }
}

ReactDOM.render(<Application/>, document.getElementById("main"));
