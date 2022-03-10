import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

export class Post extends Component {
  constructor(props) {
    super(props);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      disabledFlag: false,
    };
  }

  handleFirstName(event) {
    this.setState({ firstName: event.target.value }, () => {
      if (this.state.firstName.length > 2 && this.state.firstName.length < 50) {
        this.setState({ disabledFlag: true });
      } else {
        this.setState({ disabledFlag: false });
      }
    });
  }
  handleLastName(event) {
    this.setState({ lastName: event.target.value });
  }
  handleAddress(event) {
    this.setState({ address: event.target.value }, () => {
      if (this.state.address.length > 10) {
        this.setState({ disabledFlag: true });
      } else {
        this.setState({ disabledFlag: false });
      }
    });
  }
  onBack() {
    // useNavigate('/');
  }
  onSubmit() {
    let { firstName, lastName, address } = this.state;
    console.log('hi on submit', firstName, lastName, address);
  }
  render() {
    let { firstName, lastName, address } = this.state;
    return (
      <main>
        <div className="bg-light p-5 mb-5 row">
          <div className="col-md-12">
            <label>firstName</label>
            <input
              className="mx-3"
              onChange={this.handleFirstName}
              value={firstName}
              pattern="[a-zA-Z'-'\s]*"
            />
          </div>
          <div className="col-md-12 my-2">
            <label>lastName</label>
            <input
              className="mx-2"
              onChange={this.handleLastName}
              value={lastName}
              pattern="[a-zA-Z'-'\s]*"
            />
          </div>
          <div className="col-md-12 my-2">
            <label>address</label>
            <input className="mx-2" onChange={this.handleAddress} value={address} />
          </div>
        </div>
        <Container>
          <Form className="my-2">
            <Button classname="ml-3">
              <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>
                Back
              </a>
            </Button>
          </Form>
          <Form className="my-2">
            <Button classname="ml-3" onClick={this.onSubmit}>
              Save
            </Button>
          </Form>
          <Form>
            <Button classname="mt-3" onClick={this.onSubmit}>
              <a href="/final" style={{ color: '#fff', textDecoration: 'none' }}>
                Save and next
              </a>
            </Button>
          </Form>
        </Container>
      </main>
    );
  }
}

export default Post;
