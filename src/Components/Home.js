import React from 'react';
class Home extends React.Component{
  render(){
    return(
      <div id="HomePage">
      <div>
        <h1 id="HeaderOne">Farm Basket: Shop fresh, shop local</h1>
        </div>
        <div>
          <img id="HomeImage" src={process.env.PUBLIC_URL + "/thankfarmer.jpg"}/>
        </div>
      <div id="HomeMainCont">
        <h3 class='HomeContent'>Philosophy
        <p>Buying your produce in your local farmers market promotes the local economy, as well as improving our food choices
        in order to achieve a healthier and more sustainable lifestyle. </p></h3>
      <h3 class class='HomeContent'>Contact
        <p>manuelamarcrobert@localfarmers.com</p></h3>
      </div>
    </div>
    )
  }
}

export default Home;