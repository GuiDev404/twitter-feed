import React from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Feed from './components/Feed'

function App() {
  const [tweets, setTweets] = React.useState([]);

  const deleteTweet = (id)=> {
    setTweets(prevTweets=> prevTweets.filter(tweet=> tweet.id !== id));
  }
 
  const handleSubmit = (tweet)=> {
    return (e)=> {
      e.preventDefault();
  
      const lastTweet = tweets[tweets.length - 1];

      const newTweet = {
        authorName: 'Anonymous Use',
        authorUsername: 'anonymous',
        id: lastTweet ? lastTweet.id + 1 : 1,
        content: tweet,
        date: Date.now(),
        deleteTweet
      }

      setTweets(prevTweets=> prevTweets.concat(newTweet))
    }
  }

  return (
    <main className="container">
      <Header title='Inicio' />
      <Form handleSubmit={handleSubmit} />
      <Feed tweets={tweets} setTweets={setTweets} />
    </main>
  )
}

export default App
