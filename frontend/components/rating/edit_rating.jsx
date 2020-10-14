import React from 'react'
import RatingForm from './rating_form'

class EditRatingForm extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchRating(this.props.match.params.ratingId)
    
  }

  render(){
    

    if (!this.props.rating) return null
    return(
     <RatingForm 
        rating = {this.props.rating}
        action = {this.props.action}
        currentUser = {this.props.currentUser}
        restaurant = {this.props.restaurant}
        match={this.props.match}
        history={this.props.history}
        clearErrors ={this.props.clearErrors}
        editRating = {this.props.editRating}
        formType={this.props.formType}
        fetchRestaurant={this.props.fetchRestaurant}
     />
    )
  }
}

export default EditRatingForm