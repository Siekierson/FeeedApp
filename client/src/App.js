import React from 'react';
import StartView from './views/StartView';
import ClassicOrPersonalize from './views/ClassicOrPersonalize';
import ClassicOrder from './views/ClassicOrder';
import CustomizedOrder from './views/CustomizedOrder';
import styled from 'styled-components';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import SubmitOrder from './views/SubmitOrder';
const Video = styled.video`
width:100vw;
` 
const Wrapper = styled.div`
width:100vw;
height:100vh;
overflow:hidden;
`
const ShadowBox = styled.div`
position:absolute;
top:0;
left:0;
height:100vh;
padding: 20% 40px 40px 40px;
background-color: rgba(0,0,0,.7);
width:100vw;
`

const App = () => {
  return (
    <div className="App">
      <Wrapper>
        <Video loop autoPlay >
        <source src={require('./assets/pizza.mp4')} type="video/mp4" />
        </Video>
        <ShadowBox>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={StartView}/>
              <Route path='/ClassicOrPersonalize' component={ClassicOrPersonalize}/>
              <Route path='/classic' component={ClassicOrder}/>
              <Route path='/customized' component={CustomizedOrder}/>
              <Route path='/submit' component={SubmitOrder}/>
            </Switch>
          </BrowserRouter>
        </ShadowBox>
      </Wrapper>
    </div>
  );
}

export default App;
