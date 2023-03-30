import ModyoSdk from './clients/ModyoClient';

const space = 'animals';
const type = 'game';
const content = ModyoSdk.getContentType(space, type);

export default {
  get() {
    return content.getEntries();
  },
  getTop(page, perPage) {
    const filter = content.Filter().Pagination(page, perPage);
    return content.getEntries(filter);
  },
};
