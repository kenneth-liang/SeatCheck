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

        const demo = ({
            email: "demo@aa.io",
            password: "password"
        })

        const displayForm = (this.props.formType === 'Create Account') ? (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="form-box">
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <h2 className="form-title">Welcome to SeatCheck!</h2>
                    {/* {this.renderErrors()} */}
                    <input type="text" value={this.state.first_name} placeholder="First Name *" onChange={this.update("first_name")} className={firstName} />
                    {this.renderFirstNameError()}
                    <input type="text" value={this.state.last_name} placeholder="Last Name *" onChange={this.update("last_name")} className={lastName}/>
                    {this.renderLastNameError()}
                    <input type="text" value={this.state.email} placeholder="Enter email *"onChange={this.update("email")} className={email} />
                    {this.renderEmailError()}
                    <input type="password" value={this.state.password} placeholder="Enter password *" onChange={this.update("password")} className={password}/>
                    {this.renderPasswordError()}
                    {/* <input type="password" value={this.state.password2} placeholder="Re-Enter password *" onChange={this.update("password2")} className="form-input" />
                    {this.renderPassword2Error()} */}
                    <input type="submit" value={this.props.formType} className="form-button"/>
                </form>
            </div>
        ) : (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="form-box">
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <h2 className="form-title">Please sign in</h2>
                    {this.renderErrors()}
                    <input type="text" value={this.state.email} placeholder="Email *" onChange={this.update("email")} className="form-input" /> 
                    <input type="password" value={this.state.password} placeholder="Password *" onChange={this.update("password")} className="form-input" /> 
                    <input type="submit" value={this.props.formType} className="form-button"/>
                    <input type="submit" value="Demo Login" onClick={() => this.props.action(demo).then(this.props.closeModal)} className="form-button"/>
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