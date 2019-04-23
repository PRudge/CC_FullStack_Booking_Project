import React, {Component} from 'react';
import EditForm from '../../components/reservations/EditForm';
import Request from '../../helpers/Request';

class EditFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservation: null,
      customer: null
    }
    this.handleReservationEdit = this.handleReservationEdit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/reservations/" + this.props.id + "?projection=embedCustomer")
      .then((reservation) => {
        this.setState({reservation: reservation})
      });
    // request.get("/customers").then((customer) => {
    //   this.setState({customer: customer._embedded.customers})
    // });
<<<<<<< HEAD
    request.get("/reservations/" + this.props.id + "/customer").then((customer) => {
      this.setState({customer: customer})
    })
=======
>>>>>>> 6340e8658598963566eb796b2269faf5032339d6
  }

  handleReservationEdit(reservation){
    const request = new Request();
    request.patch('/reservations/' + this.props.id, reservation).then(() => {
      window.location = '/reservations/' + this.props.id
    })
  }
  render(){
    if(!this.state.reservation){
      return <h1>loading</h1>;
    }
<<<<<<< HEAD
    return <EditForm reservation={this.state.reservation} customer={this.state.customer} handleReservationEdit= {this.handleReservationEdit} />
=======
    return <EditForm reservation={this.state.reservation} handleReservationEdit= {this.handleReservationEdit} />
>>>>>>> 6340e8658598963566eb796b2269faf5032339d6

  }

}
export default EditFormContainer;
