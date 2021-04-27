import React from 'react'
import {Link, Route} from 'react-router-dom'

export default function Navbar1() {
    return (
        <div style={{padding:20, display:'flex', justifyContent:'space-between',width:200}}>
             <Link to='/'>Home</Link>
             <Link to='/products'>Products</Link>
            
        </div>
    )
}
