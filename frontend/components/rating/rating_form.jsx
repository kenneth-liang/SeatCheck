import React from 'react';

class RatingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user_id: "",
            restaurant_id: this.props.match.params.restaurantId,
            overall_score: '',
            review: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.ratingChairs = this.ratingChairs.bind(this)

        this.handleHover = this.handleHover.bind(this);
        this.handleHoverLeave = this.handleHoverLeave.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
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
        
       this.props.createRating(ratingInfo).then(() => (
           this.setState({
               user_id: "",
               restaurant_id: this.props.match.params.restaurantId,
               overall_score: '',
               review: ''
           })
       ))
       window.location.reload();
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
        return(
            <div className="rating-form-container">
                <form className="rating-form">
                    <div className="rating-top">
                        <h3>Give A Rating</h3>
                        {this.renderErrors()}
                        <br/>
                        <div className="rate-score">
                            {/* <select onChange={this.update("overall_score")}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select> */}
                            {this.ratingChairs()}
                        </div>
                    </div>
                    <div className="rating-form-review">
                        <textarea className="review-input-field"
                            placeholder=" Tell us what you thought"
                            value={this.state.review}
                            onChange={this.update('review')}
                            />
                    </div>
                    <div>
                        {this.props.currentUser ? (
                        <input type="submit"
                            onClick={this.handleSubmit}
                            value="Submit"
                            className="rating-submit-btn"
                        />
                        ) : ( 
                        <input type="submit"
                            onClick={this.handleSubmit}
                            value="Submit"
                            className="rating-submit-btn"
                            disabled = "disabled"
                            id="disabled-btn"
                        />
                        )}
                    </div>

                    {this.props.currentUser ? "" : (
                        <p>Log in to make a review!</p>
                    )}
                    
                </form>
            </div>
        )
    }

}

export default RatingForm;