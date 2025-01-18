import { useState } from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import ServiceCards from './components/ServiceCards/ServiceCards'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import './App.css'
import Cat1 from './assets/Cat1.png'
import Dog1 from './assets/Dog1.png'
import Dog2 from './assets/Dog2.png'
import Button from './components/Button/Button'

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleOpenForm = () => {
    setIsFormOpen(true)
  }

  return (
    <div className="app">
      <HeroSection />
      <div className="cardsSection">
        <ServiceCards src={Dog1} title="Title 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." color="orange" />
        <ServiceCards src={Dog2} title="Title 2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." color="Bisque" />
        <ServiceCards src={Cat1} title="Title 3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." color="Aquamarine" />
        {isFormOpen && <Form setIsClicked={setIsFormOpen} />}
        <Button onClick={handleOpenForm}>Schedule a Visit</Button>
      </div>
      <Footer />
    </div>
  )
}

export default App
