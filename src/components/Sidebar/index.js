import {Link} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'

import ModeContext from '../../context/ModeContext'

import ActiveMenu from '../../context/ActiveMenu'

import {
  SidbarMain,
  SidbarList,
  SidbarListItem,
  ListItem,
  SidbarImgCard,
  SidbarImg,
  SidbarConcact,
  Sidbarpara,
} from './style'

import './index.css'

const menuItems = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  saved: 'SAVED',
  gaming: 'GAMING',
}

const SideBar = () => (
  <ModeContext.Consumer>
    {value => {
      const {darkMode} = value
      return (
        <SidbarMain darkMode={darkMode}>
          <ActiveMenu.Consumer>
            {val => {
              const {activeMenu, changeActiveItem} = val

              return (
                <SidbarList>
                  <Link className="link-item" to="/">
                    <ListItem
                      onClick={() => changeActiveItem(menuItems.home)}
                      key="HOME"
                      active={activeMenu === 'HOME'}
                      darkMode={darkMode}
                    >
                      <SidbarListItem darkMode={darkMode}>
                        <AiFillHome
                          color={activeMenu === 'HOME' ? '#ff0000' : ''}
                          className="side-item"
                          size="20"
                        />{' '}
                        Home
                      </SidbarListItem>
                    </ListItem>
                  </Link>
                  <Link className="link-item" to="/trending">
                    <ListItem
                      onClick={() => changeActiveItem(menuItems.trending)}
                      key="TRENDING"
                      active={activeMenu === 'TRENDING'}
                      darkMode={darkMode}
                    >
                      <SidbarListItem darkMode={darkMode}>
                        <HiFire
                          color={activeMenu === 'TRENDING' ? '#ff0000' : ''}
                          className="side-item"
                          size="22"
                        />{' '}
                        Trending
                      </SidbarListItem>
                    </ListItem>
                  </Link>
                  <Link className="link-item" to="/gaming">
                    <ListItem
                      onClick={() => changeActiveItem(menuItems.gaming)}
                      key="GAMING"
                      active={activeMenu === 'GAMING'}
                      darkMode={darkMode}
                    >
                      <SidbarListItem darkMode={darkMode}>
                        <SiYoutubegaming
                          color={activeMenu === 'GAMING' ? '#ff0000' : ''}
                          className="side-item"
                          size="20"
                        />
                        Gaming
                      </SidbarListItem>
                    </ListItem>
                  </Link>
                  <Link className="link-item" to="/saved-videos">
                    <ListItem
                      key="SAVED"
                      onClick={() => changeActiveItem(menuItems.saved)}
                      active={activeMenu === 'SAVED'}
                      darkMode={darkMode}
                    >
                      <SidbarListItem darkMode={darkMode}>
                        <MdPlaylistAdd
                          color={activeMenu === 'SAVED' ? '#ff0000' : ''}
                          className="side-item"
                          size="25"
                        />
                        Saved videos
                      </SidbarListItem>
                    </ListItem>
                  </Link>
                </SidbarList>
              )
            }}
          </ActiveMenu.Consumer>
          <div>
            <SidbarConcact>CONTACT US</SidbarConcact>
            <SidbarImgCard>
              <SidbarImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SidbarImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SidbarImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SidbarImgCard>
            <Sidbarpara>
              Enjoy! Now to see your channels and recommendations!
            </Sidbarpara>
          </div>
        </SidbarMain>
      )
    }}
  </ModeContext.Consumer>
)

export default SideBar
