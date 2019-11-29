import React from 'react';
import LoginView from '../components/Login/Login';
import { Redirect } from 'react-router-dom';

class Login  extends React.Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.state={
            isLoggedIn: null
        }
    }

    componentWillMount() {
        localStorage.removeItem("simpleChatUserId");
    }

    onLogin = (login) => {
        let currentUser = this.props.users.find(user => user.name === login);
        if(currentUser) {
            localStorage.setItem("simpleChatUserId", currentUser.id);
            this.props.onLoginSuccess();
            this.setState({ isLoggedIn: true });
        } else {
            alert('User didn`t finded');
        }
    }

    render() {
        if(this.state.isLoggedIn) {
            return <Redirect to='/' />
        }
        return( <LoginView onLogin = {this.onLogin} /> );
    }
};


export default Login;
