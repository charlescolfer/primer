import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import SplashPage from './SplashPage'
import FeedIndexContainer from './FeedIndexContainer'
import UploadPageContainer from './UploadPageContainer'

export const App = (props) => {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SplashPage}/>
      <Route exact path="/dashboard" component={FeedIndexContainer} />
      <Route exact path="/songs" component={FeedIndexContainer} />
      <Route exact path="/songs/new" component={UploadPageContainer} />
    </Switch>
  </BrowserRouter>
  )
}
export default App
