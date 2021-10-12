import React from 'react';
import Layout from '../components/Layout/Layout';
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import Input from '../components/UI/Input';

function SignUp(props) {
  return (
    <Layout>
      <Container style={{ margin: "5rem" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col><Input label="First Name" type="text" placeholder="enter first name" /></Col>
                <Col><Input label="Last Name" type="text" placeholder="enter last name" /></Col>
              </Row>
              <Input label="Email Address" type="email" placeholder="enter email" />
              <Input label="Password" type="password" placeholder="enter password" />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default SignUp;