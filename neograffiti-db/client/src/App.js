import React from 'react';
import './App.css';
import { withRouter, Route } from 'react-router-dom';
import { loginUser, signUpUser, verifyUser, readAllPosts } from './services/api-helper'
import Header from './components/Header'
import Footer from './components/Footer'
import LogInForm from './components/LogInForm'
import SignUpForm from './components/SignUpForm'
import Lander from './components/Lander'
import MainPage from './components/MainPage';
import SideBar from './components/SideBar';
import Suggestions from './components/Suggestions';
import SingleImage from './components/SingleImage';
import Profile from './components/Profile';

class App extends React.Component {

  state = {
    posts: [],
    currentUser: null,
    postFormData: {
      image: '',
      content: ''
    },
    commentFormData: {
      content: ''
    },
    authFormData: {
      username: '',
      password: '',
      email: '',
      full_name: '',
      image: '',
      bio: ''
    }
  }

  async componentDidMount() {
    const posts = await readAllPosts()
    this.setState({
      posts
    })
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }


  handleLoginButton = () => {
    this.props.history.push("/")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
    this.props.history.push("/")
  }

  handleSignUp = async () => {
    const currentUser = await signUpUser(this.state.authFormData);
    this.setState({ currentUser });
    this.props.history.push("/")
  }

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
    this.props.history.push("/")
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <div className="App" >
        {
          this.state.currentUser != null ?
            <Route exact path='/' render={() => (
              <div>
                <Header
                  currentUser={this.state.currentUser}
                  handleLogout={this.handleLogout}
                />
                <MainPage posts={this.state.posts} />
                <SideBar
                  currentUser={this.state.currentUser}
                />
                <Suggestions />
              </div>
            )} />
            :
            <Route exact path='/' render={() => (
              <div>
                <Lander />
                <LogInForm
                  handleLogin={this.handleLogin}
                  handleChange={this.authHandleChange}
                  formData={this.state.authFormData}
                  handleLoginButton={this.handleLoginButton}
                />
              </div>
            )} />
        }
        <Route exact path='/users/:userId' render={(props) => (
          <div>
            <Header
              currentUser={this.state.currentUser}
              handleLogout={this.handleLogout}
            />
            <Profile
              userId={props.match.params.userId}
            />
          </div>
        )} />
        <Route path='/posts/:postId' render={(props) => (
          <div>
            <Header
              currentUser={this.state.currentUser}
              handleLogout={this.handleLogout}
            />
            <SingleImage
              postId={props.match.params.postId}
            />
          </div>
        )} />
        < Route path='/login' render={() => (
          <LogInForm
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData}
            handleLoginButton={this.handleLoginButton}
          />
        )} />
        < Route path='/signup' render={() => (
          <SignUpForm
            handleSignUp={this.handleSignUp}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData}
            handleLoginButton={this.handleLoginButton}
          />
        )} />
        < Footer />
      </div >
    )
  }
}

export default withRouter(App);
