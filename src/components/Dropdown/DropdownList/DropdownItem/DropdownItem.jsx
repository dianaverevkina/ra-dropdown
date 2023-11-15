import './dropdownItem.css';

export const DropdownItem = ({ itemData, selectedItem, onSelect }) => {
  return (
    <li className={`dropdown__item ${selectedItem ===  itemData ? 'dropdown__item_active' : ''}`}>
      <button 
        type='button' 
        className="dropdown__item-btn" 
        onClick={onSelect}
      >
        {itemData}
      </button>
    </li>
  )
}
