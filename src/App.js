import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'






import Dashboard from './pages/dashboard';
import Department from './pages/department';
import Studentmodeler from './pages/studentmodeler';
import Studentanimator from './pages/studentanimator';
import Studentcompositor from './pages/studentcompositor';
import Studentprogrammer from './pages/studentprogrammer';
import Pageadmin from './pages/pageadmin';
import Partner from './pages/partner';
import Admindiscuss from './pages/discuss';
import Addstudent from './pages/addstudent';
import Editstudent from './pages/editstudent';
import Detailshowreel from './pages/detailshowreel';
import Addpartner from './pages/addpartner';
import Editpartner from './pages/editpartner';
import Adddiscuss from './pages/adddiscuss';
import MyTodoList from './pages/fccamp1';
import GateKeeper from './pages/fccamp2';
import Results from './pages/fccamp3';
import MyComponent from './pages/fccamp4';
import MagicEightBall from './pages/fccamp5';
import Controller  from './pages/fccamp6';
import MyApp from './pages/fccamp7';
import Myapps from './pages/fccamp8';
import MyForm from './pages/fccamp9';
import Counter from './pages/fccamp10';
import Increment from './pages/fccamp11';
import ClickMe from './pages/fccamp12';
import CampSite from './pages/fccamp13';
import ResetPasword from './pages/fccamp14';
import Scrool from './pages/scroll';

import ToDo from './pages/fccamp17';
import Calendar from './pages/fccamp18';
import Kalkulator from './pages/kalkulator';
library.add(faGhost, fas);

function App() {
  return (
   <Router>
    <div>
       <Route exact path="/" component={Dashboard} />
       <Route path="/department" component={Department}/>
     	<Route path="/studentmodeler" component={Studentmodeler}/>
     	<Route path="/studentanimator" component={Studentanimator}/>
     	<Route path="/studentcompositor" component={Studentcompositor}/>
     	<Route path="/studentprogrammer" component={Studentprogrammer}/>
      <Route path="/pageadmin" component={Pageadmin}/>
      <Route path="/partner" component={Partner}/>
      <Route path="/discuss" component={Admindiscuss}/>
      <Route path="/addstudent" component={Addstudent}/>
      <Route path="/editstudent" component={Editstudent} />
      <Route path="/detailshowreel" component={Detailshowreel} />
      <Route path="/addpartner" component={Addpartner} />
      <Route path="/editpartner"  component={Editpartner}/>
      <Route path="/adddiscuss" component={Adddiscuss}/>
      <Route path="/mytodolist" component={MyTodoList}/>
      <Route path="/gatekeeper" component={GateKeeper} />
      <Route path="/result" component={Results} />
      <Route path="/mycomponent" component={MyComponent}/>
      <Route path="/magiceightball" component={MagicEightBall}/>
      <Route path="/plus" component={Controller}/>
      <Route path="/myapp" component={MyApp}/>
      <Route path="/myapps" component={Myapps}/>
      <Route path="/myform" component={MyForm}/>
      <Route path="/counter" component={Counter}/>
      <Route path="/increment" component={Increment} />
      <Route path="/clickme" component={ClickMe} />
      <Route path="/camper" component={CampSite} />
      <Route path="/resetpass" component={ResetPasword}/>
      <Route path="/todo" component={ToDo}/>
      <Route path="/date" component={Calendar}/>
      <Route path="/kalkulator" component={Kalkulator}/>
      <Route path="/scroll" component={Scrool}/>
    </div> 
   </Router>
  );
}

export default App;
