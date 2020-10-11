import React from 'react'
import RatingForm from './rating_form'

class EditRatingForm extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchRating(this.props.match.params.id)
  }

  render(){
    return(
      <div>sup bitch</div>
    )
  }
}

export default EditRatingForm