import { TweetsList } from 'components/TweetsList/TweetsList';
import { Filter } from 'components/Filter/Filter';
import { Link } from 'components/Navigation/Navigation.styled';
import { useState } from 'react';
import { Wrap } from './style/Tweets.styled';

const Tweets = () => {
  const [filter, setFilter] = useState('');

  const handleChange = event => {
    setFilter(event.target.value);
  };

  return (
    <main>
      <Wrap>
        <Link to="/">Go Back</Link>
        <Filter filter={filter} handleChange={handleChange} />
      </Wrap>
      <TweetsList filter={filter} />
    </main>
  );
};

export default Tweets;
