import React from "react";



class UserProfile extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidiMouth(){
        this.props.fetchUser(this.props.user.id)
    }

    render () {
        return(
            <div>
                <h1>{`${this.props.user.first_name}'s reservations & favorites:`}</h1>    
            </div>
        )
    }

}


export default UserProfile;