import React from "react";
import "./Nav.css";
import { Link, useRouteMatch } from "react-router-dom";

const links = [
  {
    to : '/',
    exact : true,
    label : 'Home',
  },
  {
    to : '/products',
    exact : false,
    label : 'Products',
  },
];

function CustomLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <div className={match ? "nav-item active" : "nav-item"}>
      <Link className="nav-link" to={to}>
        {label}
      </Link>
    </div>
  );
}

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
        <a href='# ' className="navbar-brand">API</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li class="nav-item active">
              <Link to="/" exact class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/products" class="nav-link">
                Products
              </Link>
            </li> */}
            {this.displayCustomLink(links)}
          </ul>
        </div>
      </nav>
    );
  }

  displayCustomLink = (links) => {
    if(links.length > 0){
      var displayCustomLink = links.map((item, index) => {
        return <CustomLink key={index} activeOnlyWhenExact={item.exact} to={item.to} label={item.label}/>
      });
    }
    return displayCustomLink;
  }
}

export default Nav;
