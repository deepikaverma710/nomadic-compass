import React, { useState, useContext, useEffect } from 'react';
import Navigation from '../../components/navigation/Navigation';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import { firebaseAuth } from '../../context/ContextIndex';
import { getPackages, getCartByUid, incQuantity, decQuantity, deleteCartListItem } from '../../network';
import "./cart.css"


const Cart = () => {


  const { token, reset, setReset} = useContext(firebaseAuth)
  let total = 0

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);
  const [tourPackages, setTourPackages] = useState([])
  const [quantity, setQuantity] = useState([])
  const [activity, setActivity] = useState([])
  const [destitaion, setDestination] = useState([])
  const [cartId, setcartId] = useState([])
  
  // const [qty, setQty] = useState(1)
  // const [totalPrice, setTotalPrice] = useState()
  const [minusButton, setMinusButton] = useState(false)
  const [plusButton, setPlusButton] = useState(false)
  
  // const qtyAddtion = (i) => {
  //   // setMinusButton(false)
  //   // const newQty = qty + 1;
  //   // setQty(newQty);
  //   console.log(i)
  // }

  // const qtySubtraction = () => {
  //   if (qty < 2) {
  //     setMinusButton(true)
  //   }
  //   else {
  //     const newQty = qty - 1;
  //     setQty(newQty);
  //   }
  // }

  // const getpkgs= async()=>{
  //     const pkgs=  await getPackages("8K3y9NSUnVZGqWeeBX8uA8ENYxu2", "6077ff89a172bb2908d9e6a7");
  //     console.log(pkgs)
  //     setTourPackage(pkgs)
  // }

  // useEffect(() => {
  //   (async()=>{
  //     const pkgs=  await getPackages(token, "6077d4221ba51400043c02f8");
  //     console.log(pkgs)
  //     console.log(`ssss${token}`)
  //     setTourPackages(pkgs)
  // })()
  // }, []);



  useEffect(() => {
    if (token != null) {
      (async () => {
        const newCart = await getCartByUid(token)
        const dateId = [newCart.map(a => a.cartList.map(b => { return b.dateId }))]
        const quantity = [newCart.map(a=>a.cartList.map(b=> { return b.quantity}))]
        const activity = [newCart.map(a=>a.cartList.map(b=> { return b.activityName}))]
        const destination = [newCart.map(a=>a.cartList.map(b=> { return b.destinationName}))]
        const cartid = [newCart.map(a=>a.cartList.map(b=> { return b._id}))]
        
        setQuantity(quantity[0][0]);
        setActivity(activity[0][0]);
        setDestination(destination[0][0]);
        setcartId(cartid[0][0])         

        const newpackages = await Promise.all(dateId[0][0].map(async (a) => {
          if (!!a) {
            return await getPackages(token, a);
          } else { return null }
        }))
        setTourPackages(newpackages) 
      })()
    }
  }, [reset]);

  return (
    <div>
      <Navigation />
<div className="container cart-inner">

      <div className="table-responsive-lg dates-table table table-bordered table-hover ">
        <table className="table">

          <thead className="table-info">
            <tr>
              <th scope="col">Package</th>
              <th scope="col">Destination</th>
              <th scope="col">Activity</th>
              <th scope="col">Qty</th>
              <th scope="col">Price/Person</th>
              <th scope="col">Total Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {console.log(`helloo ${tourPackages}`)}
            {tourPackages.map((a, i) => {
              if (!!a) {
                return (

                  <tr key={a[0]._id}>
                    <th scope="row">{a[0].packageName}</th>
                    <td>{destitaion[i]}</td>
                    <td>{activity[i]}</td>
                    <td>
                      <button
                        disabled={minusButton}
                        className="pb-1 border-0 bg-white"
                        onClick={async(e)=>{e.preventDefault() ;setReset(!reset); await decQuantity(cartId[i])}}>
                        <FaMinusCircle />
                      </button >
                      {quantity[i]}
                      <button
                        disabled={plusButton}
                        className="border-0 bg-white"
                        onClick={(e)=>{e.preventDefault(); setReset(!reset); incQuantity(cartId[i])}}>
                        <FaPlusCircle />
                      </button> 
                    </td>
                    <td>{a[0].budget}</td>
                    <td>{quantity[i] * a[0].budget}</td>
                    <td className="d-none">{total = total + (quantity[i] * a[0].budget)}</td>
                    <td className="text-center">
                      <Link
                      to={{
                        pathname:  `/${activity[i]}/${destitaion[i]}/${a[0].packageName}`,
                        }}>
                        <button className="booking-button-two mr-3">See details</button></Link>
                    <button className="booking-button-two"
                    onClick={(e)=>{e.preventDefault(); setReset(!reset); deleteCartListItem(cartId[i])}}>
                      Remove</button></td>
                  </tr>
                )
              } else { }
            })}
          </tbody>
        </table>
        <div className=" p-2 font-weight-bold text-center border-top">Total: ${total}</div>
      </div>
      <div className="p-2 text-center">
       
        <Button className="checkout-btn2" onClick={handleShow}>
          Checkout
      </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Receipt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="list-unstyled">
            {tourPackages.map(a => {
              if (!!a) {
                return (
                  <li key={a[0]._id} className="text-center">
                    {a[0].packageName}
                  </li>
                )
              }
            })}
            <li className="font-weight-bold text-center">Total Price= {total}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  );

};

export default Cart;