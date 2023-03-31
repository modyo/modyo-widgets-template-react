import PostsRepository from './PostsRepository';
import ApiRepository from './ApiRepository';

const repositories = {
  posts: PostsRepository,
  api: ApiRepository,
};
export default {
  get: (name) => repositories[name],
};
