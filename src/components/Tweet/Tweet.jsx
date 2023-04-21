import { useState } from 'react';
import logo from '../../images/logo.png';
import minds from '../../images/pic.png';
import {
  Avatar,
  AvatarWrap,
  Button,
  Decoration,
  LogoImg,
  Text,
  TextWrap,
  Wrap,
} from './Tweet.styled';
import { updateTweet } from 'servises/tweetAPI';

export const Tweet = ({
  item: { user, followers, avatar, tweets, id, following },
}) => {
  const [isFollowing, setIsFollowing] = useState(following);
  const [userFollowers, setUserFollowers] = useState(followers);

  const handelFollow = () => {
    setIsFollowing(!isFollowing);

    if (!isFollowing) {
      setIsFollowing(true);
      setUserFollowers(userFollowers + 1);
      updateTweet(id, userFollowers + 1, true);
      return;
    }

    setIsFollowing(false);
    setUserFollowers(userFollowers - 1);
    updateTweet(id, userFollowers - 1, false);
  };

  return (
    <Wrap>
      <LogoImg src={logo} alt="logo" width="76" />
      <img src={minds} alt="minds" width="308" />
      <AvatarWrap>
        <Avatar src={avatar} alt={user} width="64" />
      </AvatarWrap>
      <Decoration></Decoration>
      <TextWrap>
        <Text>
          {tweets.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} tweets
        </Text>
        <Text>
          {userFollowers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
          followers
        </Text>
      </TextWrap>
      <Button
        onClick={handelFollow}
        style={
          !isFollowing
            ? { background: '#EBD8FF', padding: '14px 54px' }
            : { background: '#5CD3A8', padding: '14px 37px' }
        }
        type="button"
      >
        {!isFollowing ? 'follow' : 'following'}
      </Button>
    </Wrap>
  );
};
