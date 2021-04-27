import React from 'react'
import { Link } from 'react-router-dom';
import "../../../App.css"

export default function Links() {
    return (
        <>
            <div className="sidebar" style={{display:"flex",flexDirection:"column", zIndex:20,justifyContent:"space-around", background:"#dddddc",width:"17%", height: "100vh", position:"fixed", top:0}}>
                <div style={{fontSize:"35px", fontWeight:"700"}}><Link to="/" style={{color: "black",textDecoration:"none"}}>Comfort </Link></div>
                <Link to="/furniture">Furniture</Link>
                <Link to="/light">Lighting</Link>
                <Link to="/accessories">Accessories</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </>
    )
}
