<template>
  <div class="col-md-4 text-center card border-0">
    <div class="card-header">
      <img
        :src="image"
        :alt="title">
      <h3 class="h4 mt-2">
        {{ title }}
      </h3>
    </div>
    <div class="card-body d-flex flex-column justify-content-between">
      <p class="text-muted text-left mb-4">
        {{ excerpt }}
      </p>
      <p class="text-muted">
        Estimated reading time {{ readingTime }} minutes.
      </p>
    </div>
    <div class="card-footer">
      <a
        class="btn btn-outline-primary"
        :href="url">Learn more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    excerpt: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '#',
    },
    title: {
      type: String,
      default: '#',
    },
    description: {
      type: String,
      default: 'Description',
    },
    publishedAt: {
      type: Date,
      default: new Date(),
    },
    url: {
      type: String,
      validator(validate) {
        // eslint-disable-next-line max-len
        return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(validate);
      },
      default: '#',
    },
  },
  computed: {
    descriptionText() {
      const parser = new window.DOMParser();
      const htmlDoc = parser.parseFromString(this.description, 'text/html');
      return htmlDoc.querySelector('body').innerText || '';
    },
    readingTime() {
      return Math.ceil(this.descriptionText.split(' ').length / 130);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .card-header {
    height: 250px;
  }
</style>
