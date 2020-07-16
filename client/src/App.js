import React from 'react';
import RestaurantsProvider from 'contexts/RestaurantsContext';
import StartView from 'views/client/StartView';
import ClassicOrPersonalize from 'views/client/ClassicOrPersonalize';
import ClassicOrder from 'views/client/ClassicOrder';
import CustomizedOrder from 'views/client/CustomizedOrder';
import styled from 'styled-components';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import SubmitOrder from 'views/client/SubmitOrder';
import Restaurant from 'views/restaurant/Restaurant';

const Video = styled.video`
position:fixed;
top:-10%;
left:-10%;
width:120%;
@media (max-width:1500px) {
  top:0;
    width:auto;
    height: 100vh;
    left:-40%;
}
` 
const Wrapper = styled.div`
position:absolute;
top:0;
left:0;
text-align:center;
width:100vw;
`
const ShadowBox = styled.div`
position:fixed;
height:100vh;
background-color: rgba(0,0,0,.75);
width:100vw;
`

const App = () => {
  return (
    <div className="App">
      <RestaurantsProvider>
        <Video loop muted autoPlay >
        <source src={require('assets/pizza.mp4')} type="video/mp4" />
        </Video>
        <ShadowBox/>
        <Wrapper>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={StartView}/>
              <Route path='/ClassicOrPersonalize' component={ClassicOrPersonalize}/>
              <Route path='/classic' component={ClassicOrder}/>
              <Route path='/customized' component={CustomizedOrder}/>
              <Route path='/submit' component={SubmitOrder}/>
              <Route path='/submit' component={SubmitOrder}/>
              <Route path='/restaurant' component={Restaurant}/>
            </Switch>
          </BrowserRouter>
        </Wrapper>
      </RestaurantsProvider>
    </div>
  );
}

export default App;
