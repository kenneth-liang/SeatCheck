import React from 'react'

import {withRouter} from 'react-router-dom'

class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            // password2: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
        this.demoUser = this.demoUser.bind(this)
    }

    componentDidMount(){
        this.props.clearErrors()
    }

    update(field){
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    renderErrors() {
        return (
            <ul className="error-messsages">
                {this.props.errors.map((error, i) => (
                <li className="error-message" key={`error-${i}`}>
                    {error}
                </li>
                ))}
            </ul>
        );
    }

    renderEmailError(){
        if (this.props.errors.includes("Email can't be blank")) {
            return(
                <li className="error-message">Please enter your Email</li>
            )
        } else {
            return null
        }
    }

    renderPasswordError(){
        if (this.props.errors.includes("Password is too short (minimum is 6 characters)")) {
            return (
                <li className="error-message">Please enter your password</li>
            )
        } else {
            return null
        }
    }

    renderFirstNameError(){
        if (this.props.errors.includes("First name can't be blank")){
            return (
                <li className="error-message">Please enter your first name.</li>
            )
        } else {
            return null
        }
    }

    renderLastNameError(){
        if (this.props.errors.includes("Last name can't be blank")){
            return (
                <li className="error-message">Please enter your last name.</li>
            )
        } else {
            return null
        }
    }

    renderSignInEmailError() {
        if (this.props.errors.includes("email")) {
            return (
                <li className="error-message">Please enter your Email</li>
            )
        } else {
            return null
        }
    }
    renderSignInPasswordError() {
        if (this.props.errors.includes("password")) {
            return (
                <li className="error-message">Please enter your password.</li>
            )
        }else if (this.props.errors.includes("Invalid email or password")) {
            return (
                <li className="error-message">Password was incorrect</li>
            )
        } else {
            return null
        }
    }

    demoUser(e) {
        e.preventDefault();

        const demoUser = {
            email: "demo@aa.io",
            password: "password"
        };

        const speed = 100;
        if (this.state.email !== demoUser.email) {
            const inputUsername = setInterval(() => {
                if (this.state.email !== demoUser.email) {
                    const temp = demoUser.email.slice(0, this.state.email.length + 1);
                    this.setState({ email: temp });
                } else {
                    clearInterval(inputUsername);
                    animatePassword()
                }
            }, speed);
        };

        const animatePassword = () => {
            if (this.state.password !== demoUser.password) {
                const inputPassword = setInterval(() => {
                    if (this.state.password !== demoUser.password) {
                        const temp = demoUser.password.slice(0, this.state.password.length + 1);
                        this.setState({ password: temp });
                    } else {
                        clearInterval(inputPassword);
                        // this.props.login(this.state)
                        this.props.action(demoUser).then(this.props.closeModal)
                    }
                }, speed);
            };
        };
    };
    
    
    handleSubmit(e){
        e.preventDefault();
        // if (this.state.password2 === "" || this.state.password !== this.state.password2){
        //     this.props.errors.concat("confirm-password")
        // }
        const user = Object.assign({}, this.state);
        this.props.action(user).then(this.props.closeModal);
    }

    render (){
        const errors =  Object.values(this.props.errors);
        const firstName = errors.includes("First name can't be blank") ? "form-error-input" : "form-input"
        const lastName = errors.includes("Last name can't be blank") ? "form-error-input" : "form-input"
        const email = errors.includes("Email can't be blank") ? "form-error-input" : "form-input"
        const password = errors.includes("Password is too short (minimum is 6 characters)") ? "form-error-input" : "form-input"
        const signInEmail = errors.includes("email") ? "form-error-input" : "form-input"
        const signInPassword = errors.includes("password") || errors.includes("Invalid email or password") ? "form-error-input" : "form-input"
        
        const displayForm = (this.props.formType === 'Create Account') ? (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="form-box">
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <h2 className="form-title">Welcome to Seat Check!</h2>
                    <input type="text" value={this.state.first_name} placeholder="First Name *" onChange={this.update("first_name")} className={firstName} />
                    {this.renderFirstNameError()}
                    <input type="text" value={this.state.last_name} placeholder="Last Name *" onChange={this.update("last_name")} className={lastName}/>
                    {this.renderLastNameError()}
                    <input type="text" value={this.state.email} placeholder="Enter email *"onChange={this.update("email")} className={email} />
                    {this.renderEmailError()}
                    <input type="password" value={this.state.password} placeholder="Enter password *" onChange={this.update("password")} className={password}/>
                    {this.renderPasswordError()}
                    <input type="submit" value={this.props.formType} className="form-button"/>
                </form>
            </div>
        ) : (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="form-box">
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <h2 className="form-title">Please sign in</h2>
                    {/* {this.renderErrors()} */}
                    <input type="text" value={this.state.email} placeholder="Email *" onChange={this.update("email")} className={signInEmail} /> 
                    {this.renderSignInEmailError()}
                    <input type="password" value={this.state.password} placeholder="Password *" onChange={this.update("password")} className={signInPassword} /> 
                    {this.renderSignInPasswordError()}
                    <input type="submit" value={this.props.formType} className="form-button"/>
                    <input type="submit" value="Demo Login" onClick={this.demoUser} className="form-button"/>
                </form>
            </div>
        )


        return(
          <div >
            {displayForm}
          </div>
        );
    }
}

export default withRouter(SessionForm);