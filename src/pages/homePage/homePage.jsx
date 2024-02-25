import './homePage.css'
import Header from '../../components/Header/header.jsx' 
import CardsList from "../../components/Cards/CardsList/cardsList.jsx"

function homePage() {
  return (
    <div className="home-page">
      <Header />
      <span className='home-page-title'>Página Inicial</span>
      <CardsList />
    </div>
  )
}

export default homePage
