import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {AuthContext} from "../Context/AuthContext";


export default class Items extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    handleAdd=(item) => {
        
        const {handleCart,isAuth} = this.context;
        const {history} = this.props
        //console.log("item added");
        // if(!auth){

        //     history.push("../login")
        // }
            handleCart(item)
        // else{
            //  return <Redirect to="/shoppingcart" />
            history.push("../shoppingcart")
        // }



    }
    

   render(){
        const {match} = this.props
        const{data,handleCart} = this.context
       // console.log(data, "data", match);
    const item = data.find(item => item.id === match.params.id)
    //console.log(item, "item-find")

    if(!item){
        return <Link  to='/'><div style={{height:'100vh'}}> Go Back </div></Link>
    }
    return (
        <div style={{height:'100vh', display:'grid',marginLeft:'19%',gridTemplateColumns:"50% 50%", }}>
            <img src={item.picture} alt=""/>
            <div style={{textAlign:'left', background: "#dddddc", padding:"5%"}}>
                <h2>{item.name}</h2>
                <h3>Price : ₹ {item.price}</h3>
                <p>Description : {item.description}</p>
                <button style={{padding:"15px 60px"}} onClick={()=>this.handleAdd(item)}>Add to Cart</button>
            </div>
        </div>
    )
   }
}


Items.contextType = AuthContext;