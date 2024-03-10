import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/header.jsx' 
import ImageComponent from '../../components/others/profileImage.jsx'
import ProfileCard from '../../components/others/profileCard.jsx';
import ProfileButton from '../../components/Buttons/profileButton/profileButton.jsx';
import Sidebar from "../../components/Sidebar/sidebar.jsx";
import Footer from "../../components/Footer/footer.jsx"

import './profilePage.css'

function profilePage() {
  
  const navigate = useNavigate();
    const toEditPage = () => {
    navigate('/home'); // mudar isso depois
    };

  return (
    <div>
      <Header title={"Seu Perfil"} />
      <Sidebar />
      <div className='aligment'>
        <div className='login-box'>
          <p className= 'text'> Página do usuário</p>
          <div className = 'profile-section'>
            <div >
              <ImageComponent alt='perfil' src='https://avatars.githubusercontent.com/u/80339437?v=4'/>
            </div>
            <div className='image-container'>
              <ProfileCard  label='Nome' value={'Allan Miller Silva Lima'} />
              <ProfileCard  label='E-mail' value={'millerallan17@gmail.com'} />
              <ProfileCard  label='CPF' value={'12678032400'} />
            </div>
          </div> 
          <ProfileButton className = 'profile-button' onClick={toEditPage} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default profilePage
