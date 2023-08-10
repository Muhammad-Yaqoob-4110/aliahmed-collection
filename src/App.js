import Collections from './components/collections';
import Card from './components/common/card';
import Navbar from './components/navbar';
import { getCollection } from './services/collection';
import {Route,Switch} from "react-router-dom"
function App() {
  return (
    <div>
      <Navbar/>
      <div className='container my-2'>
        <Switch>
          <Route exact path = "/:id/:title" render = {(props)=><Card {...props}/>}/>
          <Route path = "/" render = {(props)=><Collections {...props} collection = {getCollection()}/>}/>
        </Switch>
    </div>
    </div>
  );
}

export default App;
