import React from 'react';
import '../../pages/profilePagee/profilePage.css'; // ajuste o caminho conforme necessário


function profileCard({ label, value }) {
  return (
    <div className='profile-card-container'>
        <div className='label-container'>
            <p className='label-text'>{label}</p>
            </div>
                <div className='value-container'>
            <p className='value-text'>{value}</p>
        </div>
  </div>
  );
}

export default profileCard;