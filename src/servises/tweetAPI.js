import axios from 'axios';

const agent = axios.create({
  baseURL: 'https://6442503433997d3ef90d0025.mockapi.io/api/v1/',
});

export async function getTweets(page = 1) {
  try {
    const response = await agent.get(`users?page=${page}&limit=3`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateTweet(id, followers, following) {
  try {
    const response = await agent.put(`users/${id}`, {
      followers: followers,
      following: following,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
