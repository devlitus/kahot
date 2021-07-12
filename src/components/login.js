import "./login.css";

export const Login = () => {
  return (
    <div className="bg-body">
      <div className="container">
        <form className="login" action="">
          <input type="email" name="email" id="email" />
          <input type="password" name="psw" id="psw" />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
};
