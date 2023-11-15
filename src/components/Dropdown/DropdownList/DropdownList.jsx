import { useState } from 'react';
import { DropdownItem } from './DropdownItem/DropdownItem';
import './dropdownList.css';

export const DropDownList = ({ list }) => {
  const [selected, setSelectedItem] = useState('');
  
  function handleHighlightItem(e) {
    setSelectedItem(e.target.textContent);
  }
  return (
    <ul className='dropdown-list'>
      {list.map((item, index) => {
        return (
          <DropdownItem 
            key={index} 
            itemData={item} 
            selectedItem={selected}
            onSelect={handleHighlightItem} 
          />
        );
      })}
    </ul>
  )
}
