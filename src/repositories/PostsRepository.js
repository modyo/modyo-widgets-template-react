import ModyoSDK from './clients/ModyoSDK';

const typePost = ModyoSDK.getContentType('webinar-cli', 'posts');

export default {
  all() {
    return typePost.getEntries();
  },
  getPost(uuid) {
    return ModyoSDK.getPost(uuid);
  },
};
