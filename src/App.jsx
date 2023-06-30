import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'
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
      <>
        {cardElements}
      </>
      <Footer />
    </div>
  )
}

export default App
