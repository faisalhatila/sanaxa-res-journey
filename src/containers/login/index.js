// import React, { useState, useContext } from "react";
// import { useHistory, NavLink, useParams } from "react-router-dom";
// import {
//   VALIDATOR_EMAIL,
//   VALIDATOR_MINLENGTH,
//   VALIDATOR_REQUIRE,
//   VALIDATOR_CONFIRMPASSWORD,
// } from "../../shared/util/validators";
// import { useForm } from "../../shared/hooks/form-hook";
// import { useHttpClient } from "../../shared/hooks/http-hook";
// import { AuthContext } from "../../shared/context";
// import { Input, Button } from "../../shared/components/formelements";
// const LoginContainer = (props) => {
//   const auth = useContext(AuthContext);
//   const history = useHistory();
//   const [isLogin, setIsLogin] = React.useState(false);
//   let heading = "Log In";
//   const { isLoading, error, sendRequest, clearError } = useHttpClient();
//   const [formState, inputHandler, setFormData] = useForm(
//     {
//       email: {
//         value: "",
//         isValid: false,
//       },
//       password: {
//         value: "",
//         isValid: false,
//       },
//     },
//     false
//   );
//   if (!isLogin) {
//     heading = "Sign Up";
//   }
//   const isLoginHandler = () => {
//     clearError();
//     setIsLogin((prevState) => !prevState);
//     if (!isLogin) {
//       setFormData({
//         ...formState.inputs,
//         name: undefined,
//       });
//     } else {
//       setFormData(
//         {
//           ...formState.inputs,
//           name: {
//             value: "",
//             isValid: false,
//           },
//         },
//         false
//       );
//     }
//   };

//   const isSubmitHandler = async (e) => {
//     e.preventDefault();
//     // console.log(formState.email.value);
//     // console.log(formState.password.value);

//     if (isLogin) {
//       try {
//         const responseData = await sendRequest(
//           `${process.env.REACT_APP_BACKEND_URL}/login`,
//           "POST",
//           {
//             "Content-Type": "application/json",
//           },
//           JSON.stringify({
//             email: formState.email.value,
//             password: formState.inputs.password.value,
//           })
//         );
//         auth.login(responseData.userId, responseData.token);
//         history.go("/");
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       try {
//         const responseData = await sendRequest(
//           `${process.env.REACT_APP_BACKEND_URL}/register`,
//           "POST",
//           {
//             "Content-Type": "application/json",
//           },
//           JSON.stringify({
//             email: formState.inputs.email.value,
//             password: formState.inputs.password.value,
//             name: formState.inputs.name.value,
//           })
//         );
//         clearError();
//         setIsLogin(true);
//         setFormData(
//           {
//             ...formState.inputs,
//             name: undefined,
//           },
//           false
//         );
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };
//   let contactForm = (
//     <>
//       <Input
//         id="email"
//         element="input"
//         validators={[VALIDATOR_EMAIL()]}
//         errorText="Please enter a valid email"
//         onInput={inputHandler}
//         placeholder="Email Address"
//       />
//       <Input
//         id="password"
//         element="password"
//         validators={[VALIDATOR_MINLENGTH(6)]}
//         errorText="Please enter a valid password of 6 characters atleat!"
//         onInput={inputHandler}
//         placeholder="Password"
//       />
//     </>
//   );
//   if (!isLogin) {
//     contactForm = (
//       <>
//         <Input
//           id="name"
//           element="input"
//           type="text  "
//           validators={[VALIDATOR_REQUIRE()]}
//           errorText="Please enter a valid name"
//           onInput={inputHandler}
//           placeholder="Name"
//         />
//       </>
//     );
//   }

//   return (
//     <div
//       style={{
//         backgroundImage:
//           "linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(assets/img/loginScreen/Rectangle290.png)",
//       }}
//       className="loginPageMainDiv"
//     >
//       <div className="container">
//         <div className="loginScreenRow1">
//           <h2>
//             <strong>Snaxa</strong>
//           </h2>
//           <p>Restaurant Login Panel</p>
//           <div className="loginPageFormDiv col-12 col-lg-4 col-md-6 offset-lg-4 offset-md-3 mt-3">
//             <p>Login In To Your Account</p>
//             <form className="mt-2">
//               <div class="form-group">
//                 <label for="exampleInputEmail1">User Name</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   placeholder="Enter email"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="exampleInputPassword1">Password</label>
//                 <input
//                   type="password"
//                   class="form-control"
//                   id="exampleInputPassword1"
//                   placeholder="Password"
//                 />
//               </div>
//               <div class="form-check">
//                 <input
//                   type="checkbox"
//                   class="form-check-input"
//                   id="exampleCheck1"
//                 />
//                 <label class="form-check-label" for="exampleCheck1">
//                   Keep Me Looged In
//                 </label>
//               </div>
//               <button type="submit" class="btn btn-primary loginButton mt-2">
//                 Submit
//               </button>
//               <p className="createAccountText pt-2 pb-2">
//                 Dont have an account?
//                 <span className="createAccountLabel">Create an account</span>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default LoginContainer;
import React, { Component } from "react";
class LoginContainer extends Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    loginCredentials: [],
    isRememberedChecked: false,
  };
  handleEmailChange = (event) => {
    console.log(event.target.value);
    this.setState({
      emailError: "",
      email: event.target.value,
    });
  };
  handlePasswordChange = (event) => {
    console.log(event.target.value);
    this.setState({
      passwordError: "",
      password: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      let collections = [
        this.state.email,
        this.state.password,
        this.state.isRememberedChecked,
      ];
      let { loginCredentials } = this.state;
      loginCredentials.push(collections);
      console.log(loginCredentials);
      setTimeout(() => {
        alert("perfect");
      }, 2000);
    } else {
      console.log(this.state);
    }
  };
  validate = () => {
    const { email, password } = this.state;
    let { emailError, passwordError } = this.state;
    if (!email || !email.includes("@")) {
      emailError = "Please Enter Proper Email Address";
    } else {
      emailError = "";
    }
    if (!password) {
      passwordError = "Please Enter A Valid Password";
    } else {
      passwordError = "";
    }
    if (emailError || passwordError) {
      this.setState({
        emailError,
        passwordError,
      });
      return false;
    }
    return true;
  };
  handleCheck = (e) => {
    console.log(e.target.checked);
    this.setState({
      isRememberedChecked: e.target.checked,
    });
  };
  render() {
    const { email, emailError, password, passwordError } = this.state;
    return (
      <div
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(assets/img/loginScreen/Rectangle290.png)",
        }}
        className="loginPageMainDiv"
      >
        <div className="container">
          <div className="loginScreenRow1">
            <h2>
              <strong>Snaxa</strong>
            </h2>
            <p>Restaurant Login Panel</p>
            <div className="loginPageFormDiv col-12 col-lg-4 col-md-6 offset-lg-4 offset-md-3 mt-3">
              <p>Login In To Your Account</p>
              <form className="mt-2">
                <div class="form-group">
                  <label for="exampleInputEmail1">User Name</label>
                  <input
                    onChange={this.handleEmailChange}
                    value={email}
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  {emailError ? (
                    <div
                      style={{
                        textAlign: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {emailError}
                    </div>
                  ) : null}
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    onChange={this.handlePasswordChange}
                    value={password}
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                  {passwordError ? (
                    <div
                      style={{
                        textAlign: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {passwordError}
                    </div>
                  ) : null}
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                    onChange={this.handleCheck}
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Keep Me Looged In
                  </label>
                </div>
                <button
                  type="submit"
                  onClick={this.handleSubmit}
                  class="btn btn-primary loginButton mt-2"
                >
                  Submit
                </button>
                <p className="createAccountText pt-2 pb-2">
                  Dont have an account?
                  <span className="createAccountLabel">Create an account</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
