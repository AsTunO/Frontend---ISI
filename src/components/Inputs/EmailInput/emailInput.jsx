/* eslint-disable react/prop-types */
function EmailInput(props) {
    return (
        <div className='field'>
            <input
                type='text'
                id='email'
                name='email'
                onClick={props.onClick}
                onChange={props.onChange}
                placeholder={props.placeholder}                
            />
        </div>
    );
}

export default EmailInput;