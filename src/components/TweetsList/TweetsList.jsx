import { useState, useEffect } from 'react';
import { getFilteredTweets } from 'servises/tweetAPI';
import { Tweet } from 'components/Tweet/Tweet';
import { BtnLoadMore, List, ListWrap } from './TweetsList.styled';
import error from '../../images/error.png';

export const TweetsList = ({ filter }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isShowButton, setIsShowButton] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(filter);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUsers([]);
    setPage(1);
    setLoading(true);

    getFilteredTweets(filter)
      .then(user => {
        setUsers(user);
        setCurrentFilter(filter);
        if (user.length < 3) {
          return setIsShowButton(false);
        }
        setIsShowButton(true);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
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
    <>
      {!loading ? (
        <ListWrap>
          <List className="ImageGallery">
            {users.map(user => {
              return <Tweet key={user.id} item={user} />;
            })}
          </List>
          {users.length === 0 && <img src={error} alt="error" width={400} />}
          {isShowButton && (
            <BtnLoadMore type="button" onClick={loadMore}>
              Load more
            </BtnLoadMore>
          )}
        </ListWrap>
      ) : (
        <h2 style={{ textAlign: 'center' }}>Loading...</h2>
      )}
    </>
  );
};
