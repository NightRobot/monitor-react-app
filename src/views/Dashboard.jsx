import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  Table
} from 'react-bootstrap';
import axios from 'axios';

const HOTEL_SERVICE_URL = "http://127.0.0.1:4002"

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.loaddata = this.loaddata.bind(this);
    this.state = {
      data:[],
      product:[],
      total_ticket:0,
      is_used:0
    }
  }
  loaddata(){
    axios.get(HOTEL_SERVICE_URL+'/product/find/all')
        .then(response => {
            console.log(response)
            this.setState({ product: response.data });
        })
        .catch((error) => {
            console.log(error);
        })
    axios.get(HOTEL_SERVICE_URL+'/ticket/count')
        .then(response => {
            console.log(response)
            this.setState({ total_ticket: response.data[0].total });
        })
        .catch((error) => {
            console.log(error);
        })
    axios.get(HOTEL_SERVICE_URL+'/ticket/isused')
        .then(response => {
            console.log(response)
            this.setState({ is_used: response.data[0].total });
        })
        .catch((error) => {
            console.log(error);
        })
  }
  componentDidMount() {
    this.loaddata()
  }
  renderTableProduct(){
    console.log(this.state.product)
    return this.state.product.map((product, index) => {
         const { pid, p_name, sold } = product //destructuring
         return (
            <tr key={pid}>
              <td>{pid}</td>
              <td>{p_name}</td>
              <td>{sold}</td>
            </tr>
         )
      })
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    return (
      <div className="col-lg-12 mb-4 mt-4 scrollTable" >
        <Row>
          <Col>
            <Card>
              <Card.Header>สินค้าทั้งหมด</Card.Header>
                <Table striped bordered hover size="sm" responsive>
                  <thead>
                    <tr >
                      <td>ID</td>
                      <td>ชื่อของสินค้า</td>
                      <td>จำนวนที่ขายแล้ว</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderTableProduct()}
                  </tbody>
                </Table>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>จำนวน Ticket</Card.Header>
              <Table striped bordered hover size="sm" responsive>
                <thead>
                  <tr >
                    <td>Ticket</td>
                    <td>จำนวน</td>
                  </tr>
                </thead>
                <tbody>
                  <tr >
                    <td>จำนวนทั้งหมด</td>
                    <td>{this.state.total_ticket}</td>
                  </tr>
                  <tr>
                    <td>จำนวนที่ใช้งานแล้ว</td>
                    <td>{this.state.is_used}</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
        <Row>

        </Row>
      </div>
    );
  }
}

export default Dashboard;
