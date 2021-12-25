import React from "react";
import NavItem from './NavItem'

const Nav = ({activeTab, onTabChange}) => {
 
return (
  <nav className="App-nav">
    <ul>
      <NavItem page = {"Items"} activeTab = {activeTab} onTabChange = {onTabChange}/>
      <NavItem page = {"Cart"}  activeTab = {activeTab} onTabChange = {onTabChange}/>
    </ul>
  </nav>
)
}
export default Nav;
