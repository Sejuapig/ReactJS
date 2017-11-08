var React = require("react");

function UserConnectForm(props) {
    return (
      <div id="main">
      <h1> Formulaire de Connexion </h1>
      <br/>
      <form onSubmit={ props.onUserConnection }>
        <label>Name : </label>
        <input
           name="name"
           onInput={props.onUserChange}
        />
        <br/>

        <label>Password : </label>
        <input
           name="password"
           onInput={props.onUserChange}
        />
        <br/>

        <label>Envoyer</label>
        <input
           name="submit"
           value={"Submit"}
           type = "submit"
        />
      </form>
      </div>
    );
}

module.exports = UserConnectForm;
