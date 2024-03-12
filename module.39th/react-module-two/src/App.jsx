import './App.css'
import Counter from './Counter'
import Posts from './Posts'

function App() {
  const handleClick = () => {
    alert('Clicked One')
  }
  function handleClickThree(num) {
    alert(`5 + ${num} = ${5 + num}`)
  }

  return (
    <>
      <h1>React Module Two</h1>

      <div>
        <Posts />
      </div>

      <div style={{marginTop: '20px'}}>
        <button onClick={handleClick}>Click One</button>
        <button onClick={() => alert('clicked two')}>Click Two</button>
        <button onClick={() => handleClickThree(5)}>5 + 3</button>
      </div>

      <div style={{marginTop: '10px'}}>
        <Counter/>
      </div>
    </>
  )
}

export default App
