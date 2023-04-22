import { useState, useEffect } from 'react';
import { getFilteredTweets } from 'servises/tweetAPI';
import { Tweet } from 'components/Tweet/Tweet';
import { BtnLoadMore, List, ListWrap } from './TweetsList.styled';

export const TweetsList = ({ filter }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isShowButton, setIsShowButton] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(filter);

  useEffect(() => {
    setUsers([]);
    setPage(1);

    getFilteredTweets(filter)
      .then(user => {
        setUsers(user);
        setCurrentFilter(filter);
        if (user.length < 3) {
          return setIsShowButton(false);
        }
        setIsShowButton(true);
      })
      .catch(error => console.log(error));
  }, [filter]);

  useEffect(() => {
    if (page === 1) {
      return;
    }

    getFilteredTweets(currentFilter, page)
      .then(user => {
        setUsers(prevUsers => [...prevUsers, ...user]);
        if (user.length < 3) {
          return setIsShowButton(false);
        }
        setIsShowButton(true);
      })
      .catch(error => console.log(error));
  }, [currentFilter, page]);

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
