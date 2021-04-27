import React from 'react'
import "../App.css"
import {Link} from 'react-router-dom'

export default class Furniture extends React.Component {
    constructor(props){
        super(props);
        this.state={
            sortVal:''
        }
    }
    handleChange=(e) => {  
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
   

   render(){
       const {match,data,store} = this.props
       const {sortVal} = this.state
    return (
        <>  
            <div className="sort">
                <label> Sort by Price </label>
                <select name="sortVal" value={sortVal} onChange={this.handleChange}>
                    <option value="">none</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
           </div>
        <div style={{display:"flex", flexFlow:"wrap", marginLeft:"17%", justifyContent:'space-around'}}>
           
            {data.sort((a,b)=>{
                if(sortVal == 'asc'){

                    return a.price - b.price
                }
                else{
                    return b.price - a.price
                }
            }).filter( item => item.category=="light").map(item => <Link to={`${match.url}/${item.id}`}>
            <div className="card" >
                <img width='316px' src={item.picture} alt=""/>
                <h3>{item.name}</h3>
                <h4>₹ {item.price}</h4>
            </div></Link> )}
        </div>
        </>
    )
   }
}
