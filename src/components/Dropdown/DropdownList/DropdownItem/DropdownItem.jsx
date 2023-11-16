import './dropdownItem.css';

export const DropdownItem = ({ itemData, selectedItem, onSelectItem }) => {
  return (
    <li className={`dropdown__item ${selectedItem ===  itemData ? 'dropdown__item_active' : ''}`}>
      <button 
        type='button' 
        className="dropdown__item-btn" 
        onClick={onSelectItem}
      >
        {itemData}
      </button>
    </li>
  )
}
