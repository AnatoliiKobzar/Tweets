import { TweetsList } from 'components/TweetsList/TweetsList';
import { Link } from 'react-router-dom';

const Tweets = () => {
  return (
    <div>
      <Link to="/">Back to Home</Link>
      <h1 style={{ textAlign: 'center' }}>Tweets!</h1>
      <TweetsList />
    </div>
  );
};

export default Tweets;
