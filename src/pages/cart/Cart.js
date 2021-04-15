import React, { useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap'

const Cart = () => {
    const tourPackage = [
        {
            _id: "60760e8143090445b5f0811d",
            activityName: "New activiity ",
            destinations: [
                {
                    _id: "60760e8143090445b5f0811e",
                    destinationName: "new",
                    tourPackages: [
                        {
                            _id: "60760e8143090445b5f0811f",
                            packageName: "new package",
                            packageDescription: "Description",
                            packageHighlights: "Highlights",
                            startLocation: "start here",
                            finishLocation: "finish here",
                            groupSize: 5,
                            activityLevel: "Easy",
                            duration: "5",
                            budget: 10000,
                            inclusions: "ABC, DEF",
                            dates: [
                                {
                                    noOfPackageAdded: 2,
                                    _id: "60760e8143090445b5f08120",
                                    departureDate: "2021-04-13T21:34:57.104Z",
                                    tripStatus: "Active"
                                }
                            ]
                        }
                    ]
                }
            ],
        },
        {
            _id: "60760e8143090445b5f0811e",
            activityName: "New activiity 2",
            destinations: [
                {
                    _id: "60760e8143090445b5f0811e",
                    destinationName: "new dest 2",
                    tourPackages: [
                        {
                            _id: "60760e8143090445b5f0811f",
                            packageName: "new package 2",
                            packageDescription: "Description",
                            packageHighlights: "Highlights",
                            startLocation: "start here",
                            finishLocation: "finish here",
                            groupSize: 5,
                            activityLevel: "Easy",
                            duration: "5",
                            budget: 20000,
                            inclusions: "ABC, DEF",
                            dates: [
                                {
                                    noOfPackageAdded: 3,
                                    _id: "60760e8143090445b5f08120",
                                    departureDate: "2021-04-13T21:34:57.104Z",
                                    tripStatus: "Active"
                                }
                            ]
                        }
                    ]
                }
            ],
        }
    ]

    let total = 0
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    // const [qty, setQty] = useState(1)
    // const [totalPrice, setTotalPrice] = useState()
    // const [minusButton, setMinusButton] = useState(false)
    // const [plusButton, setPlusButton] = useState(false)
    // const qtyAddtion = () => {
    //     setMinusButton(false)
    //     const newQty = qty + 1;
    //     setQty(newQty);
    // }

    // const qtySubtraction = () => {
    //     if (qty < 2) {
    //         setMinusButton(true)
    //     }
    //     else {
    //         const newQty = qty - 1;
    //         setQty(newQty);
    //     }
    // }



    return (
        <div>
            <div className="hero-image">
                <Navigation />
            </div>
            <div className="table-responsive-lg">
                <table className="table">


                    <thead>
                        <tr>
                            <th scope="col">Package</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Activity</th>
                            {/* <th scope="col">Qty</th> */}
                            <th scope="col">Price/Person</th>
                            {/* <th scope="col">Total Price</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {tourPackage.map(a =>
                            <tr key={a._id}>
                                <th scope="row">{a.destinations[0].tourPackages[0].packageName}</th>
                                <td>{a.destinations[0].destinationName}</td>
                                <td>{a.activityName}</td>
                                {/* <td>
                                    <button
                                        disabled={minusButton}
                                        className="pb-1 border-0 bg-white"
                                        onClick={qtySubtraction}>
                                        <FaMinusCircle />
                                    </button >
                                    {a.destinations[0].tourPackages[0].dates[0].noOfPackageAdded}
                                    <button
                                        disabled={plusButton}
                                        className="border-0 bg-white"
                                        onClick={()=>a.destinations[0].tourPackages[0].dates[0].noOfPackageAdded =a.destinations[0].tourPackages[0].dates[0].noOfPackageAdded+1}>
                                        <FaPlusCircle />
                                    </button>
                                </td> */}
                                <td className="d-none">{total = total + a.destinations[0].tourPackages[0].budget}</td>
                                <td>{a.destinations[0].tourPackages[0].budget}</td>
                                {/* <td>{qty * a.destinations[0].tourPackages[0].budget}</td> */}
                                <td className="text-right"><Link to="/details"><button>See details</button> </Link><button>Remove</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* <div className=" text-center font-weight-bold">
               <button>Checkout</button>
            </div> */}
            <div className="border p-5 text-center font-weight-bold">
                <div className=" pb-5">Total: ${total}</div>
   <Button variant="secondary" onClick={handleShow}>
   Checkout
      </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Receipt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul className="list-unstyled">
            {tourPackage.map(a =>
            <li >
                {a.destinations[0].tourPackages[0].packageName}
                </li>
                )}
                <li className= "font-weight-bold">Total Price= {total}</li>
                </ul>
                </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        </div>
    );

};

export default Cart;

