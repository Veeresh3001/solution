import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import ModeContext from './context/ModeContext'

import ActiveMenu from './context/ActiveMenu'

import SavedVideosContext from './context/SavedVideosContext'

import Home from './components/Home'
import Login from './components/Login'
import UserProtect from './components/UserProtect'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import SavedVideos from './components/SavedVideos'

import './App.css'

const menuItems = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  saved: 'SAVED',
  gaming: 'GAMING',
}

class App extends Component {
  state = {
    darkMode: false,
    savedVideosList: [],
    save: false,
    activeMenu: menuItems.home,
  }

  toggleMode = () => {
    this.setState(prev => ({darkMode: !prev.darkMode}))
  }

  addToSavedList = details => {
    this.setState(prev => ({
      savedVideosList: [...prev.savedVideosList, details],
    }))
  }

  removeFromSavedList = details => {
    const {savedVideosList} = this.state
    const updatedList = savedVideosList.filter(each => each.id !== details.id)
    this.setState({savedVideosList: updatedList})
  }

  updateSavedVideos = details => {
    const {save} = this.state
    if (save) {
      this.removeFromSavedList(details)
    } else {
      this.addToSavedList(details)
    }
  }

  updateSave = videoDetails => {
    this.setState(prev => ({save: !prev.save}))
    this.updateSavedVideos(videoDetails)
  }

  changeActiveItem = value => {
    this.setState({activeMenu: value})
  }

  render() {
    const {darkMode, savedVideosList, save, activeMenu} = this.state
    return (
      <ModeContext.Provider
        value={{
          darkMode,
          toggleMode: this.toggleMode,
        }}
      >
        <SavedVideosContext.Provider
          value={{
            save,
            savedVideosList,
            addToSavedList: this.addToSavedList,
            removeFromSavedList: this.removeFromSavedList,
            updateSave: this.updateSave,
          }}
        >
          <ActiveMenu.Provider
            value={{
              activeMenu,
              changeActiveItem: this.changeActiveItem,
            }}
          >
            <Switch>
              <Route exact path="/login" component={Login} />
              <UserProtect exact path="/" component={Home} />
              <UserProtect exact path="/trending" component={Trending} />
              <UserProtect exact path="/gaming" component={Gaming} />
              <UserProtect
                exact
                path="/videos/:id"
                component={VideoItemDetails}
              />
              <UserProtect exact path="/saved-videos" component={SavedVideos} />
              <Route exact path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </ActiveMenu.Provider>
        </SavedVideosContext.Provider>
      </ModeContext.Provider>
    )
  }
}

export default App
