import PostsRepository from './PostsRepository';
// import ApiRepository from './ApiRepository';
// import ModyoProfileRepository from './ModyoProfileRepository';

const repositories = {
  posts: PostsRepository,
  // api: ApiRepository,
  // profile: ModyoProfileRepository,
};
export default {
  get: (name) => repositories[name],
};
