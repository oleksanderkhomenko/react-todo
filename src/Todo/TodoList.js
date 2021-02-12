import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

function TodoList({ todos, onToogle }) {
  return(
    <ul style={styles.ul}>
      {todos.map((item, index) => {
        return <TodoItem item={item} key={item.id} index={index} crossOut={onToogle}></TodoItem>
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToogle: PropTypes.func.isRequired
}

export default TodoList