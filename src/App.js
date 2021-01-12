import React, { useEffect } from 'react';

import './App.css';
import Header from './Header';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import SendMail from './SendMail';
import {useDispatch,useSelector} from 'react-redux';
import { SendMailValue } from './app/counterSlice';
import { useStateValue } from './StateProvider';
import EmailBody from './EmailBody';
import Login from './Login';
import { auth } from './firebase';
import { actionTypes } from './reducer';

function App() {
const [{user,isOpen},dispatch]=useStateValue();
useEffect(() => {
       
  auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      dispatch({type:actionTypes.SET_USER,
   user:authUser});
  })
}, []);


if(user){
console.log(user)

  return (
    <div className="App">
     <Header/>
     <div className="app_body">
        <BrowserRouter>
          <Switch>
          <Route  path="/sent">
               <Sidebar/> 
                <EmailList/>
               {isOpen &&<SendMail/>}             
            </Route>
             <Route  path="/:id">
               <Sidebar/> 
               <EmailBody/> 
               {isOpen &&<SendMail/>}             
            </Route>
            
            <Route path="/">
              <Sidebar/>        
              <EmailList/> 
          {isOpen &&<SendMail/>}
              
            </Route>
            

         </Switch>
      </BrowserRouter>
     </div>

   
    </div>
    
  );}
  else{
    return (<Login/>);
  }
}

export default App;
