import './App.scss';
import * as authService from './services/auth.service';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      password: null,
      username: null
    }
  }
  handleSignUp = async () => {
    let response = await authService.regester({
      ...this.state,
      type: 'regester'
    })
    console.log(response);
  }
  handleSignIn = async () => {
    let response = await authService.regester({
      ...this.state,
      type: 'login'
    })
    if (response && response.data.err === 0) {
      localStorage.setItem('user', JSON.stringify(response.data.user))
    } else {
      console.log(response.data.msg);
    }
  }
  handleOnchange = (event, id) => {
    this.setState({
      [id]: event.target.value
    })
  }
  handleGetProfile = async () => {
    let response = await authService.getProfile({ userId: JSON.parse(localStorage.getItem('user')).id })
    console.log(response);
  }
  render() {
    return (
      <div className="App">
        <form className='col-4 my-3 mx-3'>
          <div className="form-outline mb-4">
            <input value={this.state.username} onChange={(event) => this.handleOnchange(event, 'username')} type="email" id="form2Example13" className="form-control" />
            <label className="form-label" htmlFor="form2Example13">Email address</label>
          </div>
          <div className="form-outline mb-4">
            <input value={this.state.password} onChange={(event) => this.handleOnchange(event, 'password')} type="password" id="form2Example23" className="form-control" />
            <label className="form-label" htmlFor="form2Example23">Password</label>
          </div>
          <div className="row mb-4">
            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>
          <div className="text-center mb-4 "><button type="button" onClick={() => this.handleSignIn()} className="btn btn-primary btn-block ">Sign in</button></div>
          <div className="text-center mb-4 "><button type="button" onClick={() => this.handleGetProfile()} className="btn btn-primary btn-block ">Get profile</button></div>
        </form>
        {/* <form className='col-4 my-3 mx-3'>
          <div className="form-outline mb-4">
            <input value={this.state.email} onChange={(event) => this.handleOnchange(event, 'email')} type="email" className="form-control" />
            <label className="form-label" htmlFor="">Email address</label>
          </div>
          <div className="form-outline mb-4">
            <input value={this.state.username} onChange={(event) => this.handleOnchange(event, 'username')} type="text" className="form-control" />
            <label className="form-label" htmlFor="">Username</label>
          </div>
          <div className="form-outline mb-4">
            <input value={this.state.password} onChange={(event) => this.handleOnchange(event, 'password')} type="password" className="form-control" />
            <label className="form-label" htmlFor="">Password</label>
          </div>

          <div className="text-center mb-4 "><button onClick={() => this.handleSignUp()} type="button" className="btn btn-primary btn-block ">Sign up</button></div>
        </form> */}
      </div>
    )
  }

}

export default App;
