import React from 'react'
import { Comment, Retweet, Heart, Options, Edit, Remove } from './Icons'
import profile from '../img/default_profile.png'
import Form from './Form';

const Tweet = ({ date, content, authorName, authorUsername, deleteTweet, id, setTweets}) => {
  const [toggleActions, setToggleActions] = React.useState(false);
  const [isUpdate, setIsUpdate] = React.useState(false);

  const handleToggleActions = ()=> {
    setToggleActions(toggleActions=> !toggleActions);
  }

  const setModeUpdate = ()=> {
    setIsUpdate(true)
  }

  const cancelUpdate = ()=> {
    setIsUpdate(false)
    setToggleActions(false);
  }

  const handleEdition = (tweetContent)=> {

    return (e)=> {
      e.preventDefault();

      setTweets(prevTweets=> prevTweets.map(tweet=> tweet.id !== id ? tweet : {...tweet, content: tweetContent }));
      setIsUpdate(false);
      setToggleActions(false);
    }
  }

  return (
    isUpdate 
    ? <Form initialContent={content} handleSubmit={handleEdition} isUpdated cancelUpdate={cancelUpdate} />
    : <div className="tweet">
      <div className="options-tweet full">
        <div className='d-flex flex-column tweet_header'>
          <div className='d-flex'>
            <img className='img-profile' src={profile} alt="user profile" />
            <div className='d-flex flex-column tweet_header_and_content'>
              <div>
                <b>{authorName}</b>{" "}
                <span className="tweet__username"> @{authorUsername} </span>
              </div>
              <p className="tweet__content">{content}</p>
            </div>
          </div>
        </div>
        <div className="actions">
          <button className="button-small" onClick={handleToggleActions}>
            {Options}
          </button>
          {toggleActions && (
            <div className="actions-buttons">
              <button className="action-button" onClick={setModeUpdate}>
                {Edit} <span className="action-button-text"> Editar </span>
              </button>
              <button className="action-button" onClick={() => deleteTweet(id)}>
                {Remove} <span className="action-button-text"> Eliminar </span>
              </button>
            </div>
          )}
        </div>
      </div>
 
      <div className="options-tweet-bottom">
        <button className="button-small">{Comment}</button>
        <button className="button-small">{Retweet}</button>
        <button className="button-small">{Heart}</button>
      </div>
    </div>
  );
}

export default Tweet
