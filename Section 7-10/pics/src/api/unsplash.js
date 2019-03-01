import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 16404343a8ff1d8851602c845352fd791024499025fa0d41926006d9e9cdb4f5'
  }
});
