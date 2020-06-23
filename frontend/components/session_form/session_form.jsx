import React from 'react'

class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.renderErrors = this.renderErrors.bind(this)
    }

    update(field){
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    renderErrors() {
        // debugger
        return(
        <ul>
            {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
                {error}
            </li>
            ))}
        </ul>
        );
    }


    handleSubmit(e){
        e.preventDefault();
        if (this.props.formType === 'Sign In') {
            const user = Object.assign({}, this.state);
            this.props.action(user).then(this.props.closeModal)
        } else if (this.props.formType === "Create Account") {
            if (this.state.confirm_password !== this.state.password || this.state.confirm_password === "") {
                this.props.receiveErrors(['Passwords Did Not Match'])
            } else {
                const {first_name, last_name, email, password} = this.state 
                this.props
                  .action({ first_name, last_name, email, password })
                  .then(this.props.closeModal);
            }
        }   
    }

    render (){
        const demo = ({
            email: "demo@aa.io",
            password: "password"
        })

        const displayForm = this.props.formType === 'Create Account' ? (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="form-box">
                    <h2>Welcome to SeatCheck!</h2>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    <input type="text" value={this.state.first_name} placeholder="First Name" onChange={this.update("first_name")} />
                    <br />
                    <input type="text" value={this.state.last_name} placeholder="Last Name" onChange={this.update("last_name")}/>
                    <br />
                    <input type="text" value={this.state.email} placeholder="Enter email"onChange={this.update("email")}  />
                    <br />
                    <input type="password" value={this.state.password} placeholder="Enter password" onChange={this.update("password")}  />
                    <br />
                    <input type="password" value={this.state.confirm_password} placeholder="Re-enter password"onChange={this.update("confirm_password")}   />
                    <br />
                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        ) : (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="form-box">
                    <h2>Please sign in</h2>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    <input type="text" value={this.state.email} placeholder="Email" onChange={this.update("email")} /> 
                    <br/>
                     <input type="password" value={this.state.password} placeholder="Password" onChange={this.update("password")}  /> 
                    <br/>
                    <input type="submit" value={this.props.formType}/>
                    <br/>
                    <input type="submit" value="Demo Login" onClick={() => this.props.action(demo)}/>
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

export default SessionForm;