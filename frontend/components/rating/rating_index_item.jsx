import React from 'react';
import {Link} from 'react-router-dom'

class RatingIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.deleteRating = this.deleteRating.bind(this);
        this.getScore = this.getScore.bind(this);
    }

    getScore(){
        let overallScore = this.props.rating.overall_score

        const score = []
        for (var i = 0; i < overallScore; i++ ){
            score.push(
                <i key={i} className="fas fa-chair fa-lg chair-filled"></i>
                //filled 
                // <img key={i} className="chair-icon-filled" src="https://seat-check-seeds.s3-us-west-1.amazonaws.com/chair-fill.png" />
            ) 
        }
        for (var i = overallScore; i < 5 ; i++ ){
            score.push(
                //empty 
                // <img key={i} className="chair-icon" src="https://seat-check-seeds.s3-us-west-1.amazonaws.com/chair-empty.png" />       
                <i key={i} className="fas fa-chair fa-sm chair-open"></i>
                ) 
        }
        return score;
    }

    deleteRating(id){
        return e=> {
            e.preventDefault();
            this.props.deleteRating(id).then(()=> location.reload() );
        }
    }

    render (){
        // if (!(this.props.currentUser.id === this.props.rating.user.id)) return null 
        const deleleButton = 
            (this.props.currentUser && this.props.currentUser.id === this.props.rating.user.id) ?  (
                <button className="dlt-btn"
                    type="button"
                    onClick={this.deleteRating(this.props.rating.id)}>X</button>
            ) : (
                ""
            );  
            
        
        
        // const editButton = (this.props.currentUser && this.props.currentUser.id === this.props.rating.user.id) ? (
        //     <Link className="rating-btn"
        //             type="button"
        //             onClick={() => this.props.openModal('edit')}>Edit</Link>
        //     ) : (
        //         ""
        //     );  
        const editButton = (this.props.currentUser && this.props.currentUser.id === this.props.rating.user.id) ? (
            <Link className="edit-btn"
                to={`/restaurants/${this.props.restaurant.id}/ratings/${this.props.rating.id}/edit`}><i className="fas fa-edit"></i> Edit</Link>
            ) : (
                ""
            );  
    
        
        // set random color 
        let colors = ['#d86441', '#df4e96', '#bb6acd', '#6c8ae4'];
        let random_color = colors[Math.floor(Math.random() * colors.length)];
        let bcolor = {
            background: random_color
        }
        
        return (
        
           <div className="rating-item">
               <div className="rating-user-container"  >
                    <div className="rating-user-icon" style={bcolor}>
                        {this.props.rating.user.first_name[0]}
                    </div>

                    <div className="rating-user">
                        {this.props.rating.user.first_name} {this.props.rating.user.last_name}
                    </div>
               </div>

                <div className="rating-info-container">
                    <div className="rating-info-header">
                        <span className="score-icon">{this.getScore()}</span>
                        <span className="rating-date"><i className="fas fa-share"></i> Sat on {this.props.rating.created_at.slice(0,10)}</span>
                        <div className="dlt-btn-div">
                            {editButton}{deleleButton}
                        </div>
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
