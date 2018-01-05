/*eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './client/components/Home';
import Header from './client/components/Header';
import AllFurBabies from './client/components/AllFurBabies';
import Scrapbook from './client/components/Scrapbook';
import PageMaker from './client/components/PageMaker';
import ScrapbookPage from './client/components/ScrapbookPage';
import MovingPictures from './client/components/MovingPictures';
import UpdateScrapbookPage from './client/components/UpdateScrapbookPage'
import UpdateFurBaby from './client/components/UpdateFurBaby';
import FurBabyDetail from './client/components/FurBabyDetail';
import store from './client/store'
import { getFbs, getTrackers, login, getUser, getImages, setUser } from './client/reducer'
import firebase, { auth, provider } from './src/fire';
import { withRouter } from 'react-router'



export default class Routes extends Component {

  componentDidMount() {
    const FbsThunk = getFbs();
    const userThunk = setUser()
    const imagesThunk = getImages()
    store.dispatch(FbsThunk);
    store.dispatch(userThunk);
    store.dispatch(imagesThunk);

  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/fur-babies" component={AllFurBabies} />
          <Route exact path="/fur-babies/:furbabyId" component={FurBabyDetail} />
          <Route path="/fur-babies/update/:furbabyId" component={UpdateFurBaby} />
          <Route exact path="/scrapbook/:furbabyId" component={Scrapbook} />
          <Route exact path="/scrapbook/:furbabyId/page/:pageId" component={ScrapbookPage} />
          <Route exact path="/pagemaker/:furbabyId/page/:pageId" component={PageMaker} />
          <Route exact path="/moving-scrapbook" component={MovingPictures} />
          <Route path="/fur-babies/scrapbook/update/:furbabyId" component={UpdateScrapbookPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}


