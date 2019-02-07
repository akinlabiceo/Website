import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import LandPage from './LandPage';
import Main from './Main';
import Howto from './Howto';
import SignUp from './SignUp';
import Login from './Login';

export default class Routes extends Component<{}>{
  render(){
    return(

      <Router>
   <Stack key="root" hideNavBar={true}>
   <Scene key="LandPage" component={LandPage} title="LandPage"/>
    <Scene key="Main" component={Main} title="Main"/>
    <Scene key="Howto" component={Howto} title="Howto"/>
    <Scene key="SignUp" component={SignUp} title="SignUp"/>
    <Scene key="Login" component={Login} title="Login"/>

   </Stack>
 </Router>
);
}
}
