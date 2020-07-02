import React from 'react';

class RatingIndexItem extends React.Component{
    constructor(props){
        super(props)
        // this.deleteRating = this.deleteRating.bind(this);
        // this.getScore = this.getScore.bind(this);
    }

    getScore(){
        let overallScore = this.props.rating.overall_score

        const score = []
        for (var i = 0; i < overallScore; i++ ){
            score.push(
                //filled 
                <img key={i} className="chair-icon-filled" src="https://img.icons8.com/ios-filled/50/000000/chair.png" />
            ) 
        }
        for (var i = overallScore; i < 5 ; i++ ){
            score.push(
                //empty 
                <img key={i} className="chair-icon" src="https://img.icons8.com/ios/50/000000/chair.png" />       
                ) 
        }
        return score;
    }


    deleteRating(id){
        return e=> {
            e.preventDefault();
            this.props.deleteRating(id);
        }
    }
    render (){

        return (
           <div className="rating-item">
               <div className="rating-user-container">
                    <div className="rating-user-icon">
                        {this.props.rating.user.first_name[0]}
                    </div>

                    <div className="rating-user">
                        {this.props.rating.user.first_name} {this.props.rating.user.last_name}
                    </div>
               </div>

                <div className="rating-info-container">
                    <div className="rating-info-header">
                        <span className="score-icon">{this.getScore()}</span>
                        <span className="rating-date">Sat on {this.props.rating.created_at.slice(0,10)}</span>
                        
                        {this.props.currentUser.id === this.props.rating.user.id ? (
                            <button className="rating-btn" 
                                type="button" 
                                onClick={this.deleteRating(this.props.rating.id)}>Delete</button>
                        ) : ( 
                            "" 
                        )
                        }
                    </div>
                    <div className="rating-review">
                        {this.props.rating.review}
                    </div>
                </div>
           </div>
        )
    }
}

export default RatingIndexItem;
