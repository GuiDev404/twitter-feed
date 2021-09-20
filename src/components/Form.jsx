import React, { useRef } from 'react'
import profile from '../img/default_profile.png'

const Form = ({ initialContent = '', handleSubmit, isUpdated, cancelUpdate }) => {
  const [tweet, setTweet] = React.useState(initialContent);
  const textareaRef = useRef(null);

  const handleChange = (e)=> {
    setTweet(e.target.value);
  }

  const contentLength = 250;
  const isMax = tweet.length > contentLength;

  const setHeight = ()=> {
    const textarea = textareaRef.current;
    textarea.style .height = '75px';
    textarea.style .height = `${textarea.scrollHeight}px`;
  }

  return (
    <form onSubmit={handleSubmit(tweet)} className='form'>
      <div className='d-flex'>
        <img className='img-profile' src={profile} alt="user profile" />
        <textarea
          className='form__tweet'
          value={tweet}
          placeholder="¿Qué está pasando?"
          onChange={handleChange}
          onInput={setHeight}
          ref={textareaRef}
        ></textarea>
      </div>
      <div className='form__options'>
        <div className={`length-content ${isMax ? 'text-danger' : ''}`} >
         {contentLength - tweet.length}
        </div>
 
        <div>
          {isUpdated &&
            <button className='form__cancel-button general-button' onClick={cancelUpdate}>
              <span className='form__cancel-button-text'> Cancelar </span>
            </button>
          }
          <button disabled={isMax || !tweet} className='form__add-button general-button' type='submit'>
            <span className='form__add-button-text'> {isUpdated ? 'Actualizar' : 'Twittear'} </span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form
