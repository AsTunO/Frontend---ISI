import './homePage.css'
import Header from '../../components/Header/header.jsx' 
import CardsList from '../../components/CardsList/cardsList.jsx'

function homePage() {
  return (
    <div className="home-page">
      <Header title={"Página Inicial"} />
      <CardsList />
    </div>
  )
}

export default homePage
