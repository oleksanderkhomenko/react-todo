import { useState } from 'react'
import PropTypes from 'prop-types'

function AddTodo({ onCreate }) {
  const [value, setValue] = useState('')

  function submitValue(event) {
    event.preventDefault()

    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }

  return (
    <form onSubmit={submitValue}>
      <input value={value} onChange={event => setValue(event.target.value)}>
      </input>
      <button type='submit'>Add todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo