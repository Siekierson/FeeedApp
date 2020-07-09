import React from 'react';
import SecretProvider from '../../contexts/SecretContext';
import styled from 'styled-components'
import Login from './Login';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Panel from './Panel'
const Wrapper = styled.div`
display:flex;
width:100%;
padding: 20% 40px 40px 40px;
justify-content: space-around;
`
const Restaurant = () => {
    return(
        <Wrapper>
          <SecretProvider>
            <BrowserRouter>
            <Switch>
              <Route exact path='/restaurant/' component={Login}/>
              <Route path="/panel" component={Panel} />
            </Switch>
          </BrowserRouter>
          </SecretProvider>
        </Wrapper>
    )
}
export default Restaurant;