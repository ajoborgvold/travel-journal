import Card from './components/Card'
import Header from './components/Header'
import { travelData } from './data/travelData'
import geirangerfjordImg from './assets/geirangerfjord.jpg'

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
    <>
      <Header />
      <img src={geirangerfjordImg} />
    </>
  )
}

export default App
