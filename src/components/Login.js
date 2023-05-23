import { useState } from "react";
import Card from "./Bootstrap/Card";
import Container from "./Bootstrap/Container";
import FormGroup from "./Bootstrap/FormGroup";
import { Navigate } from "react-router";

const Login = ({ User, handleUserLogin }) => {
  const [Username, setUsername] = useState("");
  const [Error, setError] = useState("");
  const Users = {
    User: {
      Name: "Praveen Kumar",
      Role: "User"
    },
    Admin: {
      Name: "Rajinikanth",
      Role: "Admin"
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    switch (Username) {
      case "":
        setError("Empty Value. Please enter the Username.");
        break;
      case "User":
      case "Admin":
        setError("");
        handleUserLogin(Users[Username]);
        break;
      default:
        setError("User not found!");
    }
  };
  return (
    <Container>
      {User && <Navigate to="/Profile" replace />}
      <div className="row">
        <div className="col-12 col-sm-6 offset-3">
          <Card Header="Sign In">
            <form onSubmit={handleSubmit}>
              {Error && (
                <div className="alert alert-danger text-center">{Error}</div>
              )}
              <FormGroup
                Label="Username"
                Value={Username}
                Id="Username"
                Desc="Use User for Normal user and use Admin for Admin user. Others are invalid."
                onChange={e => setUsername(e.target.value)}
              />
              <input
                type="submit"
                value="Sign In"
                className="btn btn-primary"
              />
            </form>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Login;
