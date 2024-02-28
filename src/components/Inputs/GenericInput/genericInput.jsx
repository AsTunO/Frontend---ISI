/* eslint-disable react/prop-types */
import './genericInput.css'

function GenericInput(props) {
    return (
        <div className='field'>
            <input
                type='text'
                id='name'
                name={props.name}
                placeholder={props.placeholder}           
                onChange={props.onChange}   
            />
        </div>
    );
}

export default GenericInput;