var React = require("react");

function UserCreationForm(props) {
    return (
      <div id="main">
      <h1> Formulaire de Création </h1>
      <br/>
      <form onSubmit={ props.onUserInscription }>
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

        <label>Image : </label>
        <input
           name="image"
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

module.exports = UserCreationForm;
