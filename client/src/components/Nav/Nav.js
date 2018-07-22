import React, { Component } from "react";
import "../../styles/Intro.css";
import { Redirect } from "react-router-dom";
import "./Nav.css";
import axios from "axios";


class Nav extends Component {
  constructor() {
    super();
    this.state={
      username: "",
      password: "",
      redirectTo: null,
    };
    this.logoutUser = this.logoutUser.bind(this);

  }

  logoutUser = (event) => {
    event.preventDefault();
    console.log('logging out');
    axios.post('/user/logout')
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
          this.setState({
            redirectTo: '/'
          })
        }
      }).catch(error => {
      console.log('Woops! Logout error!', error);
    });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{pathname: this.state.redirectTo}}/>
    } else {
      return (
        <nav>
          <ul>
            <li>
              <a
                href={(this.props.loggedIn
                ) ? (
                  ""
                ) : (
                  "/"
                )}
                className="logo"
              >
                <h2>Table-AR</h2>
              </a>
            </li>

            {(this.props.loggedIn
            ) ? (
              <li>
                <button
                  type="button"
                  id="logOut"
                  className="btn btn-primary"
                  onClick={(event) => this.logoutUser(event)}
                >
                  LOGOUT
                </button>
              </li>
            ) : (
              <li/>
            )
            }

            <li>
              <a href="https://github.com/Geoff-Goodwin-Dev/Table-AR/tree/development">Github</a>
            </li>
          </ul>
        </nav>
      );
    }
  }
}

// const Nav = props => (
//   <nav>
//     <ul>
//       <li>
//         <a
//           href={(props.loggedIn
//             ) ? (
//               ""
//             ) : (
//               "/"
//             )}
//           className="logo"
//         >
//           <h2>Table-AR</h2>
//         </a>
//       </li>
//
//       {(props.loggedIn
//         ) ? (
//           <li>
//             <button
//               type="button"
//               id="logOut"
//               className="btn btn-primary"
//               onClick={(event) => props.logout(event)}
//             >
//               LOGOUT
//             </button>
//           </li>
//         ) : (
//           <li/>
//         )
//       }
//
//       <li>
//         <a href="https://github.com/Geoff-Goodwin-Dev/Table-AR/tree/development">Github</a>
//       </li>
//     </ul>
//   </nav>
// );

export default Nav;