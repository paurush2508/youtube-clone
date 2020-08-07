import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon/>
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg" alt=""/>
            </div>
           <div className="header__input">
           <input placeholder="Search" type="text"/>
            <SearchIcon className="header__inputButton"/>
           </div>
            <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar alt="Paurush" src="https://avatars2.githubusercontent.com/u/33218897?s=460&u=3a9f21d5c41cd70859062fc3e737c92a05173316&v=4"/>
            </div>
            
        </div>
    )
}

export default Header
