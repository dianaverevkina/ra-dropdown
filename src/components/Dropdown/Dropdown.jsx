import { DropDownList } from "./DropdownList/DropdownList";
import { useState } from "react";
import './dropdown.css';

const listItems = [
  'Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out',
];

export const Dropdown = () => {
  const [dropdownList, setDropdownList] = useState(false);

  function handleShowList() {
    setDropdownList(!dropdownList);
  }


  return (
    <div className="dropdown">
      <div className="dropdown__container">
        <button type="button" className="dropdown__btn" onClick={handleShowList}>
          <span>Account Settings</span>
          <i class="material-icons">public</i>
        </button>
        {dropdownList && <DropDownList list={listItems}/>}
      </div>
   </div>
  )
}
