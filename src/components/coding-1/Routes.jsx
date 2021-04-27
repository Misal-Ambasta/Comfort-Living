import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './Home'
import ProductPage from './ProductPage'
import Products from './Products'
import axios from 'axios';

export default class Routes1 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    async componentDidMount(){
        
       await axios.get('http://localhost:3000/products').then(res=>this.setState({
            data:[...res.data]
        }))
    }
    render(){
        return (
            <div style={{margin:30}}>
                <Switch>
                    <Route path='/' exact render={() => <Home />} />
                    <Route path='/products/:id' render={ (props) => <ProductPage {...props} data={this.state.data} /> }/>
                    <Route path='/products' render={(props) =>  <Products {...props} data={this.state.data} /> } />
                    <Route>
                        <div>Error 404 </div>
                        <Link to="/">GO BACK HOME</Link>
                    </Route>
                </Switch>
            </div>
        )
    }
}
