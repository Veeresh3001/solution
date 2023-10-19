import React from 'react'

const ActiveMenu = React.createContext({
  activeMenu: 'INITIAL',
  changeActiveItem: () => {},
})

export default ActiveMenu
