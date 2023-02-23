import Button from "./Button"

function Header({ onAdd, showAdd }) {
  return (
    <header className="header">
        <h1>Task Taker</h1>
        <Button onAdd={onAdd} showAdd={showAdd}/>
    </header>
  )
}

export default Header