import './homePage.css'
import Header from '../../components/Header/header.jsx' 
import CardsList from '../../components/CardsList/cardsList.jsx'
import Footer from "../../components/Footer/footer.jsx"

function homePage() {
  return (
    <div className="home-page">
      <Header title={"Página Inicial"} />
      <CardsList />
      <Footer />
    </div>
  )
}

export default homePage
