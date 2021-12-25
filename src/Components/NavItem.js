import React from "react";

const NavItem = ({page, activeTab, onTabChange}) => {
    const itemClass = (tabName) => `App-nav-item ${activeTab === tabName ? 'selected' : ''}`
  return (
    <li className={itemClass(page)}>
      <button onClick={() => onTabChange(page)}>{page}</button>
    </li>
  )
};

export default NavItem;
