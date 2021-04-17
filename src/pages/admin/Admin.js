import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import "./Admin.css";
import { Form, Button, Col } from 'react-bootstrap';

const Admin = () => {

    const tourPackage = {
        "_id": "60760e8143090445b5f0811f",
        "packageName": "Temple Tiger",
        "packageDescription": "A flurry of construction is underway on land just outside Thailand’s infamous Tiger Temple, a monastery formally known as Wat Pa Luangta Bua Yannasampanno that doubled as a popular tiger tourism venue until last year",
        "packageHighlights": "Highlights",
        "startLocation": "Thailand",
        "finishLocation": "Mayanmar",
        "groupSize": 5,
        "activityLevel": "Easy",
        "duration": "5",
        "budget": 10000,
        "meals": "Breakfast, Lunch",
        "transport": "Bus",
        "accommodation": "Hotel, Camps", 
        "dates":
            {
                "numberOfPersonJoined": 4,
                "_id": "60760e8143090445b5f08120",
                "departureDate": "2021-04-13T21:34:57.104Z",
                "tripStatus": "Active"
            }
        }

  return (
    <div>
        <Navigation></Navigation>
        <h1 className= "admin-heading text-center">Package Upload</h1>
        <div className= "admin-form container">
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Activity</Form.Label>
                    <Form.Control as="select">
                    <option>Camping</option>
                    <option>Trekking</option>
                    <option>Wildlife</option>
                    <option>Skiing</option>
                    <option>Photography</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Destination Name</Form.Label>
                    <Form.Control as="textarea" rows={1} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Package Name</Form.Label>
                    <Form.Control as="textarea" rows={1} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Package Highlights</Form.Label>
                    <Form.Control as="textarea" rows={1} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Package Description</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Row>
                        <Col xs={6}>
                        <Form.Label>Start Location</Form.Label>
                        <Form.Control placeholder="City/Town/Village" />
                        </Col>
                        <Col>
                        <Form.Label>End Location</Form.Label>
                        <Form.Control placeholder="City/Town/Village" />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col xs={6}>
                        <Form.Label>Start Date for the package</Form.Label>
                        <Form.Control placeholder="yy/mm/dd" />
                        </Col>
                        <Col xs={6}>
                        <Form.Label>Maximum group size</Form.Label>
                        <Form.Control placeholder="Number" />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col xs={4}>
                        <Form.Label>Meals</Form.Label>
                        <Form.Control placeholder="Number of meals included" />
                        </Col>
                        <Col xs={4}>
                        <Form.Label>Transportation</Form.Label>
                        <Form.Control placeholder="Type of transportation provided" />
                        </Col>
                        <Col xs={4}>
                        <Form.Label>Accommodation</Form.Label>
                        <Form.Control placeholder="Type of accommodation provided" />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col xs={4}>
                        <Form.Label>Activity Level</Form.Label>
                        <Form.Control as="select">
                        <option>Easy</option>
                        <option>Moderate</option>
                        <option>Difficult</option>
                        </Form.Control>
                        </Col>
                        <Col xs={4}>
                        <Form.Label>Duration of the package</Form.Label>
                        <Form.Control placeholder="Days" />
                        </Col>
                        <Col xs={4}>
                        <Form.Label>Budget</Form.Label>
                        <Form.Control placeholder="Cost of package in $" />
                        </Col>
                    </Form.Row>
                </Form.Group>                 
            </Form>

            <Button className="admin-button">Submit</Button>
        </div>
        
    </div>
  );

};

export default Admin;