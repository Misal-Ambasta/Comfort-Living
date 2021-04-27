import React from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from '../Context/AuthContext';
import styles from "./main.module.css"
import "../App.css"

export default function TopNav() {
    
    return(

        <AuthContext.Consumer>
        {
            ({cartArr,isAuth,Signout,handlelogin})=>{
                let totalItem
                if(isAuth){

                    totalItem  =cartArr.map(item => item.quantity).reduce((acc,cur)=> acc+cur,0)
                }
                else{
                    totalItem = 0
                }
                    return (
                        <>
                   <div style={{background:"#4f4f4f", width:"100%", height:"50px", position:"fixed", top:"0px"}}>
                       {!isAuth ? <Link to="/login"> <i style={{color:"white", fontSize:"25px", paddingTop:"7px", position:"absolute", top:"2px", right:"77px"}} class="fas fa-sign-in-alt"></i> </Link>
                       : <Link to="/"> <i onClick={()=>Signout()} style={{color:"white", fontSize:"25px", paddingTop:"7px", position:"absolute", top:"2px", right:"77px"}} class="fas fa-sign-out-alt"></i> </Link>}
                            <Link to="/shoppingcart"> <i class="fas fa-shopping-cart" style={{color:"white", fontSize:"25px", paddingTop:"7px", position:"absolute", top:"2px", right:"17px"}}></i></Link>
                        
                        <div className={styles.number}>{totalItem}</div>
                    </div>

                     
                    </>
                )
            }
        }
        </AuthContext.Consumer>
    )
}
