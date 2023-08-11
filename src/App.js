import Collections from './components/collections';
import Card from './components/common/card';
import Navbar from './components/navbar';
import NotFound from './components/notFound';
import { getCollection } from './services/collection';
import {Redirect, Route,Switch} from "react-router-dom"
function App() {
  return (
    <div>
      <Navbar/>
      <div className='container my-2'>
        <Switch>
          <Route exact path = "/:id/:title" render = {(props)=><Card {...props}/>}/>
          <Route exact path = "/" render = {(props)=><Collections {...props} collection = {getCollection()}/>}/>
          <Route path = "/not-found" component = {NotFound}/>
          <Redirect to = "/not-found"/>
        </Switch>
    </div>
    </div>
  );
}

export default App;
