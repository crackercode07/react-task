function Button({ onAdd, showAdd }) {
  return <button className="btn" onClick={onAdd}>{showAdd ? 'close' : 'Add'}</button>
}

export default Button