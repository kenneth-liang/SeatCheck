import React from 'react';

class RatingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user_id: "",
            restaurant_id: this.props.match.params.restaurantId,
            overall_score: '1',
            review: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this)
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

    setScore () { 
        let scores = [] 

        for (let i = 1; i <= 5; i++){
            
        }
    }

    handleSubmit(e){
        e.preventDefault();

        if (this.props.currentUser) {
            this.state.userId = this.props.currentUser.id;
        }
        // debugger

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

    }

    updateRating(newRating){
        return e => this.setState({
            rating: newRating
        })
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        );
    }


    render(){
        return(
            <div className="rating-form-container">
                {/* {this.renderErrors()} */}
                <form className="rating-form">
                    <h3>Give A Rating</h3>
                    <div className="rate-score">
                        <select onChange={this.update("overall_score")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="rating-form-review">
                        <textarea className="review-input-field"
                            placeholder="Tell us what you thought"
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
                        )
                        }
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