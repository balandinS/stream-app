import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './header';
import StreamCreator from './streams/streamCreate';
import StreamDelete from './streams/streamDelete';
import StreamEdit from './streams/streamEdit';
import StremaList from './streams/streamList';
import StreamShow from './streams/streamShow';
import history from "../history"

const App = (props) => (
     <div>
          <Router history={history}>
               <div>
                 <Header/>
                    <Route exact path="/" component={StremaList} />
                    <Route path="/streams/new" component={StreamCreator} />
                    <Route path="/streams/delete" component={StreamDelete} />
                    <Route path="/streams/edit" component={StreamEdit} />
                    <Route path="/streams/show" component={StreamShow} />
               </div>
          </Router>
     </div>
)



export default App;