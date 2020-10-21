import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="wrapper">
                <div className="container">
                    <div className="section-title contact-t">
                        <h2>যোগাযোগ</h2>
                    </div>
                    <div className="row">
                    <div className="col-md-7 offset-md-3">
                            <div className="card">
                                <div className="card-body">
                                <Form className="form-group">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>আপনার নাম *</Form.Label>
                                    <Form.Control type="email" className="padding" />

                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>আপনার ইমেল *</Form.Label>
                                    <Form.Control type="password" className="padding"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>বিষয়</Form.Label>
                                    <Form.Control type="text" className="padding" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="form-label">আপনার বার্তা</Form.Label>
                                    <Form.Control as="textarea" rows="3" className="padding"/>
                                </Form.Group>


                                <Button variant="secondary" type="submit">
                                পাঠান
  </Button>
                            </Form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Contact;