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
      <ListFooter />
    </div>
  )
}

export default List
