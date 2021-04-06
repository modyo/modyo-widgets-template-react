/* eslint-disable import/no-anonymous-default-export */
import PostRepository from './PostRepository';
import ApiRepository from './ApiRepository';

const repositories = {
  posts: PostRepository,
  api: ApiRepository,
};
export default {
  get: (name) => repositories[name],
};
