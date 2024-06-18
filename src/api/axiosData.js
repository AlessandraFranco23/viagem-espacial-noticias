import axios from 'axios';

export async function axiosData() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
}
