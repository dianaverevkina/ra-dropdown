import { DropdownItem } from './DropdownItem/DropdownItem';
import './dropdownList.css';

export const DropDownList = ({ list, selectedItem, onSelect }) => {
  return (
    <ul className='dropdown-list'>
      {list.map((item, index) => {
        return (
          <DropdownItem 
            key={index} 
            itemData={item} 
            selectedItem={selectedItem}
            onSelectItem={onSelect} 
          />
        );
      })}
    </ul>
  )
}
