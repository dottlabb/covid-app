// import React from "react";
// import {  Grid, Card, CircularProgress  } from "@material-ui/core";
// import Modal from "react-responsive-modal";
// import {  makeStyles } from "@material-ui/core/styles";

// function welcome () {

// constructor(props)
//   super(props)

//   this.state = {
//       signUp: false,
//       login: false,
//       register:false,

//   }

// onOpenModal = () => {
//   this.setState({ signUp: true });
// };

// onOpenModalLogin = () => {
//   this.setState({ login: true });
// };

// onOpenModalLogin = () => {
//   this.setState({ register: true });
// };
// onCloseModal = () => {
//   this.setState({ signUp: false });
// };

// onCloseModalclose = () => {
//   this.setState({ login: false });
// };

// onCloseModalclose = () => {
//   this.setState({ register: false });
// };

// render() {
//   const { login, signUp , register } = this.state;
//   return (
//     <>
//     <Modal open={signUp} onClose={this.onCloseModal}>
//     <div className="modal-body">
//         <h2>Sign up and help stop  <span> the spread of Covid</span></h2>
//         <span className="subtitle">Thank You</span>
//         <form className="contact-form form-validate3" novalidate="novalidate">
//             <div className="form-group">
//                 <input className="form-control" type="text" name="name" id="name" placeholder="First Name" required="" autocomplete="off" aria-required="true" />
//             </div>
//             <div className="form-group">
//                 <input className="form-control" type="text" name="surName" id="surName" placeholder="Surname Name" required="" autocomplete="off" aria-required="true" />
//             </div>
//             <div className="form-group">
//                 <input className="form-control" type="numbers" name="phNumber" id="phNumber" placeholder="Phone Number" required="" autocomplete="off" aria-required="true" />
//             </div>
//             <div className="form-group">
//                 <input className="form-control" type="text" name="" id="address" placeholder="address" required="" autocomplete="off" aria-required="true" />
//             </div>
//             <div className="form-group">
//                 <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
//             </div>
//             <div className="form-group">
//                 <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
//             </div>
//             <input className="btn btn-md btn-primary btn-center" id="sign_up" type="button" value="Sign Up" />
//         </form>
//     </div>
// </Modal>

// <Modal open={login} onClose={this.onCloseModalclose}>

//     <div className="modal-body">
//         <h2>Login and Stop <span>Covid 19</span></h2>
//         <span className="subtitle">Just fill in the form below</span>
//         <form className="contact-form form-validate4" novalidate="novalidate">
//             <div className="form-group">
//                 <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
//             </div>
//             <div className="form-group">
//                 <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
//             </div>
//             <input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" />
//         </form>
//     </div>
// </Modal>

// <Modal open={register} onClose={this.onCloseModalclose}>

//     <div className="modal-body">
//         <h2>Register Your Location To Get <span>A Printable QR Code</span></h2>
//         <span className="subtitle">Just fill in the form below</span>
//         <form className="contact-form form-validate5" novalidate="novalidate">
//             <div className="form-group">
//                 <input className="form-control" type="text" name="bisName" placeholder="buisness name" required="" autocomplete="off" aria-required="true" />
//             </div>
//             <div className="form-group">
//                 <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
//             </div>
//             <div className="form-group">
//                 <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
//             </div>
//             <input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" />
//         </form>
//     </div>
// </Modal>

// </>

// );
// };

// export default welcome;
