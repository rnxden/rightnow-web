import ListInput from './ListInput.jsx'
import ListItem from './ListItem.jsx'
import ListFooter from './ListFooter.jsx'
import './List.css'

function List() {
  return (
    <div className='list'>
      <ListInput />
      <ListItem content='Test List Item 1' />
      <ListItem content='Test List Item 2' />
      <ListItem content='Test List Item 3' />
      <ListItem content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
      <ListFooter />
    </div>
  )
}

export default List
