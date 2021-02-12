import { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
  },
  input: {
    marginRight: '1rem'
  }
}

function TodoItem({ item, index, crossOut }) {
  const { removeTodo } = useContext(Context)
  return(
    <li style={styles.li} >
      <span className={item.completed ? 'done' : ''}>
        <input
          type='checkbox'
          style={styles.input}
          checked={item.completed ? 'checked' : ''}
          onChange={() => crossOut(item.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {item.name}
      </span>
      <button onClick={() => removeTodo(item.id)}>X</button>
    </li>
  )
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number,
  crossOut: PropTypes.func.isRequired
}

export default TodoItem