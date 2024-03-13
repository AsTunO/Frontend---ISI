/* eslint-disable react/prop-types */
import { useState } from 'react';
import './passwordInput.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importando ícones do React Icons

function PasswordInput(props) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='password-field'>
            <div className='password-input-container'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    name='password'
                    placeholder='Digite sua senha'
                    onChange={props.onChange}
                    value={props.value}
                    onKeyPress={props.onKeyPress}
                ></input>
                <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='password-toggle'
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
        </div>
    );
}

export default PasswordInput;
