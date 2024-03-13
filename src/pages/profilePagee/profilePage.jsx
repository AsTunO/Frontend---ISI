import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/header.jsx' 
import ImageComponent from '../../components/others/profileImage.jsx'
import ProfileCard from '../../components/others/profileCard.jsx';
import ProfileButton from '../../components/Buttons/profileButton/profileButton.jsx';
import Sidebar from "../../components/Sidebar/sidebar.jsx";
import Footer from "../../components/Footer/footer.jsx"
import api from "../../Api.js";

import profile from '../../imgs/profile.jpg';
import './profilePage.css'
import { useAuth } from '../../Context/AuthContext.jsx';

export default function ProfilePage() {
  
  const navigate = useNavigate();
    const { email } = useAuth();
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [photo, setPhoto] = useState(profile);

    const toEditPage = () => {
      navigate('/home'); // mudar isso depois
    };

    useEffect(() => {
      const getUserData = async () => {
        try {
          const response = await api.get(`/user/${email}`);
          setNome(response.data.username);
          setCpf(response.data.is_admin ? 'Administrador' : "Usuário comum");
          const new_photo = response.data.photo ? response.data.photo : profile;
          setPhoto(new_photo);
          // console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }

      getUserData();
    }, [email]);

  return (
    <div>
      <Header title={"Seu Perfil"} />
      <Sidebar />
      <div className='aligment'>
        <div className='login-box'>
          <p className= 'text'> Página do usuário</p>
          <div className = 'profile-section'>
            <div >
              <ImageComponent alt='perfil' src={photo} />
            </div>
            <div className='image-container'>
              <ProfileCard  label='Nome' value={nome} />
              <ProfileCard  label='E-mail' value={email} />
              <ProfileCard  label='Tipo' value={cpf} />
            </div>
          </div> 
          <ProfileButton className = 'profile-button' onClick={toEditPage} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
