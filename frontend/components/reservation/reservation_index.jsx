import React from 'react';
import ReservationIndexItem from './reservation_index_item'

class ReservationIndex extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        <div className="reservations">
            <h1>Reservations</h1>
            {Object.keys(this.props.reservations).map(idx => (
                <ReservationIndexItem key={idx} reservation={this.props.reservations[idx]}/>
            ))}
        </div>
    }


}

export default ReservationIndex