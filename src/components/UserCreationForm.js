var React = require("react");
function UserCreationForm(props) {
    return (
      <form >
        <label>Name</label>
        <input
           name="name"
        />

        <label>Password</label>
        <input
           name="password"
        />

        <label>Image</label>
        <input
           name="image"
           onInput={props.onUserChange}
        />

        <label>Submit</label>
        <input
           name="submit"
           value={"Submit"}
           onClick={ props.onUserInscription }
           type = "button"
        />
      </form>
    );
}

module.exports = UserCreationForm;
