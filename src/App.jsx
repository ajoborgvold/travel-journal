import Card from './components/Card'
import Header from './components/Header'
import { travelData } from './data/travelData'

function App() {
  const cardElements = travelData.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className='container'>
      <Header />
      {cardElements}
    </div>
  )
}

export default App
