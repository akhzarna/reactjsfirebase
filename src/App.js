import React from 'react';
import logo from './logo.svg';
import './App.css';

import {fire,facebookProvider} from './Fire'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      login:'',
      password:''
    }
  }

  handleLoginChange=(event)=>{
      this.setState({
        login:event.target.value
      });
  }

  handlePasswordChange=(event)=>{
      this.setState({
        password:event.target.value
      });
  }

  submitLogin=()=>{

  // alert('SubmitLogin');

   fire.auth().signInWithEmailAndPassword(this.state.login,this.state.password).then((u)=>{
      alert('Successfully Signed In');
    }).catch((error)=>{
      alert('Login or password is not Correct');
    });

  }

  submitRegister=()=>{
      // alert(this.state.login);
      fire.auth().createUserWithEmailAndPassword(this.state.login,this.state.password).then((u)=>{
         alert('New User Created Successfully');
       }).catch((error)=>{
         alert('User Could not be registered');
       });
  }

  submitSignedInOrNot=()=>{
      // alert(this.state.login);
      fire.auth().onAuthStateChanged((user)=>{
        if (user) {
          alert(user.email);
        }else{
          alert('User is not Signed In');
        }
      });
  }

  submitLogOut=()=>{
      // alert(this.state.login);
      fire.auth().signOut().then((user)=>{
        if (user) {
          alert('Logout User is = ',user);
        }else{
          alert('Error in LogOut');
        }
      });

  }

  submitSignInWithFacebook=()=>{
    fire.auth().signInWithPopup(facebookProvider).then((result,error)=>{
      if (error) {
        alert('Error',error);
      }else{
        alert(result);
      }
    });
  }

  submitCheckSignInMethod=()=>{

    fire.auth().fetchProvidersForEmail('akhzarn@yahoo.com').then((providers)=>{
      if (providers.length === 0) {
        alert('Zero');
      }else if (providers.indexOf("password")===-1) {
        alert('Minus 1');
      }else{
        alert('Else');
      }
    })
  }

  render(){
    return (
      <div>

      <br />
      <input type="text" placeholder='Login' value={this.state.login} onChange={this.handleLoginChange} />
      <input type="text" placeholder='Password' value={this.state.password} onChange={this.handlePasswordChange} />
      <button onClick={this.submitLogin}>
      Login
      </button>
      <br />
      <br />

      <input type="text" placeholder='Login' value={this.state.login} onChange={this.handleLoginChange} />
      <input type="text" placeholder='Password' value={this.state.password} onChange={this.handlePasswordChange} />
      <button onClick={this.submitRegister}>
      Register
      </button>
      <br />
      <br />

      <input type="text" placeholder='Login' value={this.state.login} onChange={this.handleLoginChange} />
      <input type="text" placeholder='Password' value={this.state.password} onChange={this.handlePasswordChange} />
      <button onClick={this.submitSignedInOrNot}>
      Check SignedIn Or Not
      </button>
      <br />
      <br />

      <button onClick={this.submitLogOut}>
      Signed Out
      </button>
      <br />
      <br />

      <button onClick={this.submitSignInWithFacebook}>
      Sign In With Facebook
      </button>
      <br />
      <br />


      <button onClick={this.submitCheckSignInMethod}>
      Check Sign In Method
      </button>
      <br />
      <br />

      </div>
    );
  }

}

export default App;
