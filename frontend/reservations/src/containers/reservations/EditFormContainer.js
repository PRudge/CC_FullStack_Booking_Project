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

    request.get("/reservations/" + this.props.id + "/customer").then((customer) => {
      this.setState({customer: customer})
    })
  }

  handleReservationEdit(reservation){
    const request = new Request();
    request.patch('/reservations/' + this.props.id, reservation).then(() => {
      window.location = '/reservations'
    })
  }

  handleReservationDelete(id){
    const request = new Request();
    const url = '/api/pirates/' + id;
    request.delete(url).then(() => {
      window.location = '/pirates'
    })
  }


  render(){
    if(!this.state.reservation || !this.state.customer){
      return <h1>loading</h1>;
    }
    return <EditForm reservation={this.state.reservation} customer={this.state.customer} handleReservationEdit= {this.handleReservationEdit} />

  }

}
export default EditFormContainer;
