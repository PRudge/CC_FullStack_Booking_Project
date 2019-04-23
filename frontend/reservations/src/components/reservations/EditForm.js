import React, {Component} from 'react';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: props.reservation.startTime,
      date: props.reservation.date,
      numGuest: props.reservation.numGuest,
      firstName: props.customer.firstName,
      lastName: props.customer.lastName,
      phoneNum: props.customer.phoneNum
      // customer: props.reservation._links.self.href.replace("{?projection=embedCustomer}", "")
      // customer: props.customer
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
      "numGuest": this.state.numGuest,
      "firstName": this.state.firstName
    }
    this.props.handleReservationEdit(reservation);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value = {this.state.startTime} name="startTime" onChange={e => this.setState({ startTime: e.target.value })}/>
          <input type="text" value = {this.state.date} name="date" onChange={e => this.setState({ date: e.target.value })}/>
          <input type="number" value = {this.state.numGuest} name="numGuest" onChange={e => this.setState({ numGuest: e.target.value })}/>
          <input type = "text" value = {this.state.firstName} name="firstName" onChange={e => this.setState({ firstName: e.target.value })} />
          <input type = "text" value = {this.state.lastName} name="lastName" onChange={e => this.setState({ lastName: e.target.value })} />
          <input type = "text" value = {this.state.phoneNum} name="phoneNum" onChange={e => this.setState({ phoneNum: e.target.value })} />


          {/* <select name="customer" onChange={e => this.setState({ customer: e.target.value })}>
              {customerOptions}
          </select> */}
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }


}

export default EditForm;
