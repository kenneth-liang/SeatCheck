import React from 'react'

class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            first_name: '',
            last_name: '',
            email: '',
            password: '',
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
        const user = Object.assign({}, this.state);
        // debugger
        this.props.action(user).then(this.props.closeModal);
    }

    render (){
        const demo = ({
            email: "demo@aa.io",
            password: "password"
        })

        const displayForm = (this.props.formType === 'Create Account') ? (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="form-box">
                    <div onClick={(e) => {e.stopPropagation
                    this.props.closeModal;}} className="close-x">X</div>
                    <h2 className="form-title">Welcome to SeatCheck!</h2>
                    {this.renderErrors()}
                    <input type="text" value={this.state.first_name} placeholder="First Name *" onChange={this.update("first_name")} className="form-input" />
                    <input type="text" value={this.state.last_name} placeholder="Last Name *" onChange={this.update("last_name")} className="form-input"/>
                    <input type="text" value={this.state.email} placeholder="Enter email *"onChange={this.update("email")} className="form-input" />
                    <input type="password" value={this.state.password} placeholder="Enter password *" onChange={this.update("password")} className="form-input" />
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

export default SessionForm;