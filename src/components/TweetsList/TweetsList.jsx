import { useState, useEffect } from 'react';
import { getTweets } from 'servises/tweetAPI';
import { Tweet } from 'components/Tweet/Tweet';
import { BtnLoadMore, List, ListWrap } from './TweetsList.styled';

export const TweetsList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isShowButton, setIsShowButton] = useState(false);

  useEffect(() => {
    getTweets(page)
      .then(user => {
        setUsers(prevUsers => [...prevUsers, ...user]);
        if (user.length < 3) {
          return setIsShowButton(false);
        }
        setIsShowButton(true);
      })
      .catch(error => console.log(error));
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <ListWrap>
      <List className="ImageGallery">
        {users.map(user => {
          return <Tweet key={user.id} item={user} />;
        })}
      </List>
      {isShowButton && (
        <BtnLoadMore type="button" onClick={loadMore}>
          Load more
        </BtnLoadMore>
      )}
    </ListWrap>
  );
};
