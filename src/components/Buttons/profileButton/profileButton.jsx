import './profileButton.css'

function profileButton({ onClick }) {
    return (
        <div className='my-button-align'>
          <button onClick={onClick}className = 'profile-button'>
            Editar informações
          </button>
        </div>
      );
}

export default profileButton

