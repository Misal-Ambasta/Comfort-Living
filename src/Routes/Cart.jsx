import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import {AuthContext} from "../components/coding-2/Context/AuthContext"


export default class Cart extends React.Component {

       
       
     render(){
        const {cartItems,history,auth} = this.props
         const {decreaseQuantity,increaseQuantity,deleteItem,cartArr, handleCheckout} =  this.context       
        console.log(cartItems, "cart")

        let total = 0
        cartItems.map(item=>{
               
               sum(item.price*item.quantity)
            })
       function  sum(x) {
           
           total +=Number(x)
           
       console.log(total);
       }

    console.log(this.props, "cart");

    if(cartArr.length === 0 ){
        return (
          <div style={{height:"100vh"}}>
            <h3>Cart is empty</h3>

            <img
              src="data:image/png;base64,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"
              alt="emptyCart"
            />
            <br/>
            <Link to="/">
              <button style={{ color: "white", padding:"20px 40px",marginLeft:"40px", marginTop:"10px", cursor:"pointer" }}>Contine Shopping</button>
            </Link>
          </div>
        );
    }

        return (
            <div style={{height:"100vh"}}>
            <h2 style={{paddingLeft:100}}>Cart</h2>
                
                {cartItems.map(item => 

                    <div className="cartCard">
                        <img width="100px" src={item.picture}  alt={item.id}/>   
                        <h3 style={{marginTop:"30px"}}> {item.name} </h3>
                        <div className="quantity">
                            <button onClick={()=>decreaseQuantity(item)}>-</button> 
                            <h5 style={{marginTop:35}}>Quantity: {item.quantity}</h5>
                            <button onClick={()=>increaseQuantity(item)}>+</button>
                        </div>
                        <h2> ₹ {item.price*item.quantity} </h2>
                        <div id="delete" style={{width:40}} onClick={()=>deleteItem(item)}><i class="far fa-trash-alt"></i></div>
                    </div>

                )}
                <div className="checkout">
                    <Link to="/"><div><button>back</button></div></Link>
                    <h3 >Total: ₹ {cartItems.length>0 ? total : "00"} </h3>
                    <div><Link to="/checkout"><button onClick={handleCheckout} style={{ width:170}}>Proceed to checkout</button></Link></div>
                </div>
            </div>
        )
     }   
}


Cart.contextType = AuthContext