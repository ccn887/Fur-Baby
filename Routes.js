/*eslint-disable */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route, Redirect, Switch} from 'react-router-dom';
import Home from './client/components/Home';
import Header from './client/components/Header';
import AllFurBabies from './client/components/AllFurBabies';
import AllTrackers from './client/components/AllTrackers';
import AllWalks from './client/components/AllWalks';
import TrackerDetail from './client/components/TrackerDetail';
import WalkDetail from './client/components/WalkDetail';
import NewWalk from './client/components/NewWalk';
import Scrapbook from './client/components/Scrapbook';
import ScrapbookPage from './client/components/ScrapbookPage';
import UpdateScrapbookPage from './client/components/UpdateScrapbookPage'
import UpdateFurBaby from './client/components/UpdateFurBaby';
import FurBabyDetail from './client/components/FurBabyDetail';
import store from './client/store'
import {getFbs, getTrackers, login, getUser} from './client/reducer'
import firebase, { auth, provider } from './src/fire';
import { withRouter } from 'react-router'



export default class Routes extends Component {

    componentDidMount () {
      console.log('i ran')
      const FbsThunk = getFbs();
      const userThunk = login()
      // const trackersThunk = getTrackers();
      store.dispatch(FbsThunk);
store.dispatch(userThunk);
  //   }
  // })
}

  render(){
  return(
    <div>
    <Header />
    <Switch>
    <Route exact path="/" component={Home}  />
    <Route exact path="/fur-babies" component={AllFurBabies} />
    <Route exact path="/fur-babies/:furbabyId" component={FurBabyDetail} />
    <Route  exact path="/:furbabyId/trackers" component={AllTrackers} />
     <Route exact path="/trackers/:trackerId" component={TrackerDetail} />
     <Route path="/fur-babies/update/:furbabyId" component={UpdateFurBaby} />
     <Route exact path="/scrapbook" component={Scrapbook} />
     <Route path="/fur-babies/scrapbook/update/:scrapbookId" component={UpdateScrapbookPage} />
     <Route path="/fur-babies/scrapbook/:scrapbookId" component={ScrapbookPage} />
     <Route  exact path="/walks" component={AllWalks} />
     <Route  exact path="/new-walk" component={NewWalk} />
     <Route exact path="/walks/:walkId" component={WalkDetail} />
     <Redirect to="/" />
    </Switch>
    </div>
)
}
}


