import React from "react";
import { Link } from "react-router-dom";


export default function ProductPage(props) {
  
      console.log(props)
    const { id } = props.match.params;
    const { data } = props;
    const item = data.find((item) => item.id === Number(id));
    if(!item){
        return <Link to='/'>Not Found</Link>
    }
    return (
      <>
        Product Page
        <h3> Name: {item.name} </h3>
        <h3> Price: {item.price} </h3>
        <Link to='/products'>Back</Link>
      </>
    );
  }


