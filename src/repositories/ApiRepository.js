import ApiClient from './clients/ApiClient';

export default {
  guestInfo() {
    return ApiClient.get('guest');
  },
};
