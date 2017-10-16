function UserCreationForm(props) {
  var user = props.user;
    return (
      <form>
        <label>Name</label>
        <input
           name="Nom"
           value={ user.name }
        />
        <label>Password</label>
        <input
           name="Password"
           value={ user.password }
        />
        <label>Image</label>
        <input
           name="Image"
           value={ user.url }
        />
        <label>Image</label>
        <input
           name="submit"
           value={ user.submit }
           onInput={ props.updateUser }
        />
      </form>
    );
}

module.exports = UserCreationForm;
