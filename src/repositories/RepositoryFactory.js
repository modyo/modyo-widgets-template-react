import PostsRepository from './PostsRepository';

const repositories = {
  posts: PostsRepository,
};
export default {
  get: (name) => repositories[name],
};
