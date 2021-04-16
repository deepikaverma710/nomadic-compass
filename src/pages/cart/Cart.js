import React, { useState, useContext, useEffect } from 'react';
import Navigation from '../../components/navigation/Navigation';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import {firebaseAuth} from '../../context/ContextIndex';
import { getPackages, getCartByUid } from '../../network';



const Cart = () => {


    const { token} = useContext(firebaseAuth)
    let total = 0
    const [show, setShow] = useState(false);
    const [tourPackages, setTourPackages] =useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [qty, setQty] = useState(1)
    const [totalPrice, setTotalPrice] = useState()
    const [minusButton, setMinusButton] = useState(false)
    const [plusButton, setPlusButton] = useState(false)
    const qtyAddtion = () => {
        setMinusButton(false)
        const newQty = qty + 1;
        setQty(newQty);
    }

    const qtySubtraction = () => {
        if (qty < 2) {
            setMinusButton(true)
        }
        else {
            const newQty = qty - 1;
            setQty(newQty);
        }
    }

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
      if(token != null ){
          (async () => {
         const newCart= await getCartByUid(token)
         const dateId = [newCart.map(a=>a.cartList.map(b=> { return b.dateId}))]
         console.log(dateId[0][0])
         
      //    newCart.map(a=>a.cartList.map(b=>setCartQty(cartQty+b.quantity)))
         console.log(`Cart ${newCart}`)
         const abc=[1,2,3]

         const newpackages= await Promise.all(dateId[0][0].map(async (a)=>{if (!!a){
           return await getPackages(token, a);
      } else{return null}}))

        //  const newpackages=dateId[0][0].map(a=>{if (!!a){
        //      return  getPackages(token, "6077d4221ba51400043c02f8");
        //  } else{}})
         
         setTimeout(() => { setTourPackages(newpackages) }, 1000);
      })()
        }
  }, []);

    return (
        <div>
            <div className="hero-image">
                <Navigation />
            </div>
            {/* {cart.map(a=>a.cartList.map(b=>b.dateId))} */}
            {/* <button onClick={getpkgs}></button> */}

{/* { tourPackage.map(a=>{if (!!a){console.log(`fromapi ${a[0].packageName}`)} else{}} )} */}
{/* {tourPackage.map(a=>{if (!!a){console.log(`fromapi ${a[0].packageName}`)} else{}} )} */}


            <div className="table-responsive-lg">
        <table className="table">
        
  <thead>
    <tr>
      <th scope="col">Package</th>
      <th scope="col">Destination</th>
      <th scope="col">Activity</th>
      <th scope="col">Qty</th>
      <th scope="col">Price/Person</th>
      <th scope="col">Total Price</th>
    </tr>
  </thead>
  <tbody>
      {console.log(`helloo ${tourPackages}`)}
  {tourPackages.map (a=> {if(!!a){ return(
  
    <tr key={a[0]._id}>
      <th scope="row">{a[0].packageName}</th>
      <td>Manali</td>
      <td>Camping</td>
      <td>
          <button 
          disabled={minusButton} 
          className= "pb-1 border-0 bg-white" 
          onClick={qtySubtraction}>
              <FaMinusCircle />
              </button >
              {qty}
              <button 
              disabled={plusButton}
              className="border-0 bg-white" 
              onClick={qtyAddtion}>
                  <FaPlusCircle />
                  </button>
                  </td>
      <td>{a[0].budget}</td>
      <td>{qty*a[0].budget}</td>
      <td className="d-none">{total = total + a[0].budget}</td>
      <td className="text-right"><button>See details</button><button>Remove</button></td>
    </tr>
  )}else{}})}
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
            {tourPackages.map(a => {if(!!a){ return(
            <li key={a[0]._id}>
                {a[0].packageName}
                </li>
            )}})}
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

