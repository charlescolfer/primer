import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import SplashPage from './SplashPage'
import FeedIndexContainer from './FeedIndexContainer'
import UploadPageContainer from './UploadPageContainer'
import SongShowContainer from './SongShowPageContainer'
import UserProfile from './UserProfile'

export const App = (props) => {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SplashPage}/>
      <Route exact path="/dashboard" component={FeedIndexContainer} />
      <Route exact path="/songs" component={FeedIndexContainer} />
      <Route exact path="/songs/new" component={UploadPageContainer} />
      <Route exact path="/songs/:id" component={SongShowContainer}/>
      <Route exact path="/user/:id" component={UserProfile}/>
    </Switch>
  </BrowserRouter>
  )
}
export default App
