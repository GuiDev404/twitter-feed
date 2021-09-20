import React from 'react'
import Tweet from './Tweet'

const Feed = ({ tweets, setTweets }) => {
  return !tweets.length 
    ? <h4 className='no-tweets'> No hay tweets para ver </h4>
    : tweets.map((tweet) => <Tweet key={tweet.id} {...tweet} setTweets={setTweets} />)
};

export default Feed
