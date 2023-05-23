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
  handleUserLogin = User => {
    this.setState({ User });
  };
  render() {
    const User = this.state.User;
    const ProfileLink = (
      <Link className="nav-link" to="/Profile">
        Profile
      </Link>
    );
    const LogoutLink = (
      <a
        className="nav-link"
        href="/Logout"
        onClick={e => {
          e.preventDefault();
          this.handleUserLogin(false);
        }}
      >
        Logout
      </a>
    );
    const UserItems = !User
      ? [
          <Link className="nav-link" to="/Login">
            Login
          </Link>
        ]
      : User.Role === "Admin"
      ? [
          ProfileLink,
          <Link className="nav-link" to="/Admin">
            Admin
          </Link>,
          LogoutLink
        ]
      : [ProfileLink, LogoutLink];
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
          <Route
            path="/Login"
            element={
              <Login User={User} handleUserLogin={this.handleUserLogin} />
            }
          />
          <Route path="/Docs" element={<Docs />} />
          <Route element={<PrivateRoute User={User} />}>
            <Route
              path="/Profile"
              element={
                <p>
                  You're Logged In as {User.Name} and you're a {User.Role}!
                </p>
              }
            />
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
