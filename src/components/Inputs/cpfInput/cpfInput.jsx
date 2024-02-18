import './cpfInput.css'

function CPFInput() {
    return (
        <div className='CPF-field'>
            <input
                type='text'
                id='cpf'
                name='cpf'
                placeholder='Digite seu CPF'
                maxLength={14}
                onChange={(e) => {
                    const formattedCPF = e.target.value
                        .replace(/\D/g, '')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                    e.target.value = formattedCPF;
                }}
            />
        </div>
    )
}

export default CPFInput