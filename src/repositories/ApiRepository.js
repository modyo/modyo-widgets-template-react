/* eslint-disable import/no-anonymous-default-export */
import ApiClient from './clients/ApiClient';

export default {
  summary() {
    return ApiClient.get('summary');
  },
};
