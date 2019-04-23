import React, {Component} from 'react';
import Request from '../../helpers/Request';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: props.reservation.startTime,
      date: props.reservation.date,
      numGuest: props.reservation.numGuest,
      firstName: props.customer.firstName,
      lastName: props.customer.lastName,
      phoneNum: props.customer.phoneNum,
    }
    console.log("EditForm after constructor: ", this.state);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    console.log('EditForm will receive props',props);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('Edit Form handle submit: ',this.state);
    const reservation = {
      "startTime": this.state.startTime,
      "date": this.state.date,
      "numGuest": this.state.numGuest
    }

    const customer = {
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "phoneNum": this.state.phoneNum
    }

    const request = new Request()
    request.patch('/customers/' + this.props.customer.id, customer)
    .then(() => {
      this.props.handleReservationEdit(reservation);
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label for="time-slot-select">Choose Time:</label>
          <select name="startTime" value = {this.state.startTime} onChange={e => this.setState({ startTime: e.target.value })}>
            <option>12:00</option>
            <option>14:00</option>
            <option>16:00</option>
            <option>18:00</option>
            <option>20:00</option>
          </select>
          <input type ="text" value={this.state.firstName} name="firstName" onChange={e => this.setState({ firstName: e.target.value })} />
          <input type ="text" value={this.state.lastName} name="lastName" onChange={e => this.setState({ lastName: e.target.value })} />
          <input type="date" value={this.state.date} name="date" onChange={e => this.setState({ date: e.target.value })}/>
          <input type = "text" value={this.state.phoneNum} name="phoneNum" onChange={e => this.setState({ phoneNum: e.target.value })} />
          <input type="number" value={this.state.numGuest} name="numGuest" onChange={e => this.setState({ numGuest: e.target.value })}/>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }


}

export default EditForm;
