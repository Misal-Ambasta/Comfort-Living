import React from 'react'
import axios from "axios";
import {Redirect} from "react-router-dom"

export const AuthContext = React.createContext()


class AuthContextProvider extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            data: [],
            isAuth:false,
            id:"",
            cartArr : [],
            flag:false,
            isCheckout:false
        }
    }
    
    async componentDidMount(){
        await axios.get('https://mod-living-db.herokuapp.com/allProducts').then(res=>this.setState({
            data:[...res.data]
        }))
        // http://localhost:3000/allProducts
    }

     decreaseQuantity = (item) => {
        
        const {cartArr} = this.state;

        let newQty = cartArr.filter(cartItem => cartItem.id == item.id)

        if(newQty[0].quantity > 0){
            newQty[0].quantity -= 1

            this.setState({
                cartArr: cartArr.filter(cartItem => cartItem.id == item.id ? newQty : cartItem)
            })
           
        }else{
            this.deleteItem(item)
        }


    }

    increaseQuantity = (item) => {

        const {cartArr} = this.state;

        let newQty = cartArr.filter(cartItem => cartItem.id == item.id)

        newQty[0].quantity += 1
        

        this.setState({
            cartArr: cartArr.filter(cartItem => cartItem.id == item.id ? newQty : cartItem)
        })

    }

    Signout =() => {
        const {isAuth}  = this.state

        this.setState({
            isAuth:false
        })
    }
    

    deleteItem = (item) => {
        const {cartArr,data} = this.state;
        let dataItem = data.find(i=> i.id == item.id)
        dataItem.quantity = 1
        this.setState({
            data: data.filter(x => x.id == item.id ? dataItem : x),
            cartArr: cartArr.filter(cartItem => cartItem.id != item.id)
        })

        console.log(data,"data");
    }
    
        

    handleSubmit=(email,password) => {
        console.log("here11 context api call")
        axios.post("https://reqres.in/api/login", {
            email : email,
            password: password
        }).then( res =>
            this.setState({
                isAuth: true
            })
            ).catch(err => console.log(err))


    }

    
   handlestore=(id1) => {
    console.log(id1, "here id");

       this.setState({
           id:id1
       })
   }

   handleCart= (item) => {
       console.log("added");
       const {cartArr} = this.state
       let dataItem = cartArr.filter(cartItem => cartItem.id == item.id)

        if(dataItem.length > 0 && cartArr.length > 0){
           return this.increaseQuantity(item)
        }

       this.setState({
           cartArr: [...cartArr, item],
           flag:true,
           isCheckout:false
       })
   }

   handleCheckout = () => {
       this.setState({
           isCheckout:true,
           cartArr:[]
       })
   }


    render(){
        const { data, isAuth, id, flag, cartArr, isCheckout } = this.state;
        const {handleCart,handleCheckout, handlestore,deleteItem,Signout,handlelogin, handleSubmit,decreaseQuantity, increaseQuantity} = this;
        console.log(cartArr, "arr in context");
        return(
        <AuthContext.Provider value={{data, flag, isCheckout, handleCheckout, isAuth,id, cartArr,Signout,handlelogin, handleCart,deleteItem, handlestore,decreaseQuantity,increaseQuantity, handleSubmit}}>
            {this.props.children}
        </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider