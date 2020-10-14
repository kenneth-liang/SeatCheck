import React from 'react';
import {Link} from "react-router-dom"

class RatingForm extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            user_id: "",
            restaurant_id: this.props.match.params.id,
            overall_score: '',
            review: this.props.formType === "Submit Rating" ? "" : this.props.rating.review
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.ratingChairs = this.ratingChairs.bind(this)

        this.handleHover = this.handleHover.bind(this);
        this.handleHoverLeave = this.handleHoverLeave.bind(this);
    }

    componentDidMount(){
        this.props.fetchRestaurant(this.state.restaurant_id)
        this.props.clearErrors()
    }

    update(filed){
        return e => {
            this.setState({
                [filed]: e.currentTarget.value
            })
        }
    }

    handleSubmit(e){
        e.preventDefault();

        if (this.props.currentUser) {
            this.state.userId = this.props.currentUser.id;
        }

        let ratingInfo = {
            user_id: this.state.userId,
            restaurant_id: this.state.restaurant_id,
            overall_score: this.state.overall_score,
            review: this.state.review
        }

        if (this.props.formType === "Edit Rating"  ) {
            ratingInfo["id"] = this.props.rating.id
        }
        
       this.props.action(ratingInfo).then(() => (
           this.setState({
               user_id: "",
               restaurant_id: this.props.match.params.restaurantId,
               overall_score: '',
               review: ''
           })
       )).then( () => this.props.history.push(`/restaurants/${this.props.match.params.id}`))
    }

    handleHover(i){
        return () => this.setState({
            hover:true, 
            hoverV: i
        })
    }

    handleHoverLeave(){
        this.setState({ hover: false })
    }

    updateRating(newScore){
        return e => this.setState({
            overall_score: newScore
        })
    }


    ratingChairs(){
        let chairsArray = []

        for (let i = 1; i < 6; i++){
            let id, newScore; 
            newScore = this.state.hover ? this.state.hoverV : this.state.overall_score;

            if ( i <= newScore) id="full";

            chairsArray.push(
                <i key={i} 
                    className="fas fa-2x fa-chair" 
                    id={id} 
                    onMouseEnter={this.handleHover(i)}
                    onMouseLeave={this.handleHoverLeave}
                    aria-hidden="true"
                    onClick={this.updateRating(i)}
                    >
                </i>
            )
        }
        return chairsArray
    }

    renderErrors() {
        if (this.props.errors) {
            return (
            <ul className="error-list">
                {this.props.errors.map((error, i) => (
                    <li className="error-message" key={`error-${i}`}>{error}</li>
                ))}
            </ul>
            );
        }
    }

    render(){
        if (!this.props.restaurant) return null  
        return(
            <div className="rating-div">
                <div className="rating-header">
                    <Link to={`/restaurants/${this.props.restaurant.id}`} >
                        <i className="fas fa-angle-double-left"></i> Back To {this.props.restaurant.name}
                    </Link>
                </div>
                <div className="rating-form-container">
                    <div className="rating-rest-info">
                        <img className="img-sml" src={this.props.restaurant.photo}/>
                        <div className="rating-rest-text">
                            <div className="res-rest-name">
                                {this.props.restaurant.name}
                            </div>
                            <br/>
                            <i className="fas fa-utensils"></i> {this.props.restaurant.cuisine} | <i className="fas fa-map-marker-alt location-idx"></i> {this.props.restaurant.city}
                        </div>
                    </div>
                    <form className="rating-form">
                        <div className="rating-top">
                            {this.props.formType=== "Edit Rating" ? (
                                <h3>Give A New Rating: </h3>
                            ):(
                                <h3>Give A Rating: </h3>
                            )}
                            <div className="rate-score">
                                {this.ratingChairs()}
                            </div>
                        </div>
                        <div className="rating-form-review">
                            <textarea className="review-input-field"
                                placeholder= {this.state.review === "" ? "Tell us what you thought" : ""} 
                                value={this.state.review}
                                onChange={this.update('review')}
                                />
                        </div>
                        {this.renderErrors()}
                        <input type="submit"
                            onClick={this.handleSubmit}
                            value={this.props.formType}
                            className="rating-submit-btn"
                        />
                    </form>
                </div>
            </div>
        )
    }

}

export default RatingForm;