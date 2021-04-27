import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div style={{width:"100%", height:"70px",paddingTop:"20px",  background:"#d8d8d8", display:"flex", justifyContent:"space-around"}}>
            <div></div>
            <div>
                <Link to="/faq" style={{color: "black", textDecoration:"none", fontSize:"17px"}} >FAQ</Link>
            </div>
            <div>
            <Link to="/career" style={{color: "black", textDecoration:"none", fontSize:"17px"}} >Career</Link>
            
            </div>
            <div style={{display:"flex", justifyContent:"space-between", width:"10%"}}>
                <div><i class="fab fa-facebook-f"></i></div>
                <div><i class="fab fa-twitter"></i></div>
                <div><i class="fab fa-linkedin-in"></i></div>
                <div><i class="fab fa-instagram"></i></div>
            </div>
        </div>
    )
}
