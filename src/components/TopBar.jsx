import React from 'react'
require('./TopBar.css');

function TopBar() {
  return (
    <div className="toolbar custom-container">
      <div className="logo">
        <img className="logo__img"
          src="https://damassets.autodesk.net/content/dam/autodesk/draftr/4808/forge-2.png"
          alt="Bim task manager log" />
        <div className="logo__text">
          <p >BIM TASK </p>
          <p>MANAGER</p>
        </div>
      </div>
      <div className="avatar">
        <div className="avatar__text">
          <p className="avatar__text--username">JONATHAN LYSIAK</p>
          <p className="avatar__text--position">BIM COORDINATOR</p>
        </div>
        <img className="avatar__img" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt="user avatar" />
      </div>
    </div>

  )
}

export default TopBar
