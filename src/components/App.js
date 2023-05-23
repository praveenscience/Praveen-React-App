import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Bootstrap/Header";
import Home from "./Home";
import Docs from "./Docs";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

class App extends Component {
  state = {
    User: false
  };
  render() {
    const User = this.state.User;
    const UserItems = !User
      ? [
          <Link className="nav-link" to="/Login">
            Login
          </Link>
        ]
      : User.Role === "Admin"
      ? [
          <Link className="nav-link" to="/Profile">
            Profile
          </Link>,
          <Link className="nav-link" to="/Admin">
            Admin
          </Link>,
          <Link className="nav-link" to="/Logout">
            Logout
          </Link>
        ]
      : [
          <Link className="nav-link" to="/Profile">
            Profile
          </Link>,
          <Link className="nav-link" to="/Logout">
            Logout
          </Link>
        ];
    const NavItems = [
      <Link className="nav-link" to="/">
        Home
      </Link>,
      ...UserItems,
      <Link className="nav-link" to="/Docs">
        Docs
      </Link>
    ];
    return (
      <div className="App">
        <Header to="/" Link={Link} dark={true} items={NavItems}>
          React App (Prav)
        </Header>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Docs" element={<Docs />} />
          <Route element={<PrivateRoute User={User} />}>
            <Route path="/LoggedUser" element={<p>You're Logged In!</p>} />
            <Route element={<AdminRoute User={User} />}>
              <Route
                path="/Admin"
                element={<p>You're Logged In and also you're an Admin!</p>}
              />
            </Route>
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
