import React from 'react';

class ReservationIndexItem extends React.Component {
    constructor(props){
        super(props)
        // this.reservation = this.props.reservation
    }


    render(){
        const {reservation} = this.props.reservation
        // debugger
        return (
          <div className="reservation-index-item">
            {/* <h1>{reservation.restaurant.name}</h1> */}
            <h1>Date: {reservation.date}</h1>
            <h1>Time: {reservation.time}</h1>
            <h1>Table for {reservation.party}</h1>
          </div>
        );
    }
}

export default ReservationIndexItem;