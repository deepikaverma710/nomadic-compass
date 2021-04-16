import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import "./Admin.css";
import { Form, Button } from 'react-bootstrap';

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
        <h1 className= "admin-heading text-center">Package Admin</h1>
        <div className= "admin-form container">
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Package ID</Form.Label>
                    <Form.Control type="ID" placeholder="PKG1234" />
                </Form.Group>
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
            </Form>
            
            <Button className="admin-button">Submit</Button>
        </div>
        
    </div>
  );

};

export default Admin;