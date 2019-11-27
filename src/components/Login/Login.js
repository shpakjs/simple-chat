import React from 'react';
import styles from './Login.module.css';
import bg from '../../assets/bg.jpg';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'login': ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.onLogin(this.state.login);
    }
    
    handleChange(event) {
        this.setState({ login: event.target.value });
    }

    render() {
        return <div className={styles.login} style={{backgroundImage: `url(${bg})`}}>
                <div className={styles.login__form}>
                    <h4>Login</h4>
                    <input type="text" value={this.state.login} className={styles.field} onChange={(event) => this.handleChange(event)} placeholder="Enter your name"/>
                    <button onClick={this.handleSubmit}>Login</button>
                </div>
            </div>;
    }
}

export default Login;