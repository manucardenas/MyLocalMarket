import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MarketForm extends React.Component {
   constructor() {
     super();
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   async handleSubmit(e) {
     e.preventDefault();
     console.log(this.props);
     await this.props.getMarkets(this.refs.return.value);
     this.props.history.push("/Markets")
   }

   render()  {
       return (
         <div>
           <ul id='HeaderId'>
             <li>
               <Link to = '/Home'>Home</Link>
             </li>
             <li>
               <Link to = '/About'>About</Link>
               </li>
               <li>
               <Link to = '/Markets'>Markets</Link>
             </li>
             </ul>
             <form action="" className="farmer-market-form" onSubmit={this.handleSubmit}>
             <h1 className="form-title">Find your local Farmers Market!</h1>
            <div>
               <label htmlFor="city">Enter Zip Code</label>
               <input type="number" ref='return' name="zipcode"  placeholder="ex: 33018" />
             </div>
             <footer>
               <input type="submit" value="Find my market!" />
             </footer>
             </form>
           </div>
       );
   }
}
export default MarketForm;
