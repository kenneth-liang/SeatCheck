import React from 'react';

import RatingIndexItem from './rating_index_item';

class RatingIndex extends React.Component{
    constructor(props){
        super(props)
    }
    render (){
        return (
            <ul className="ratings-list">
                {(this.props.ratings).map((rating) => {
                    return (
                        <RatingIndexItem
                            key={rating.id}
                            rating={rating}
                            deleteRating={this.props.deleteRating}
                            currentUser={this.props.currentUser}
                        />
                    )
                })}
            </ul>
        )
    }
}

export default RatingIndex;