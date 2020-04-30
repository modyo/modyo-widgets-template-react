import { shallowMount } from '@vue/test-utils';
import PostCard from '@/components/PostCard.vue';

describe('PostCard.vue', () => {
  it('renders props.msg when passed', () => {
    const props = {
      excerpt: 'excerpt',
      image: 'https://via.placeholder.com/150',
      title: 'Titulo',
      description: `
      <div>
      a b n j j k o o u h bg b o o  n oi oi noi noi n oin oin
      a b n j j k o o u h bg b o o  n oi oi noi noi n oin oin
      a b n j j k o o u h bg b o o  n oi oi noi noi n oin oin
      a b n j j k o o u h bg b o o  n oi oi noi noi n oin oin
      a b n j j k o o u h bg b o o  n oi oi noi noi n oin oin
      a b n j j k o o u h bg b o o  n oi oi noi noi n oin oin
      a b n j j k o o u h bg b o o  n oi oi noi noi n oin oin
      a b n j j k o o u h bg b o o  n oi oi noi noi n oin oin
      a b n j j k o o u h bg b o o  n oi oi noi noi n oin oin
      a b n j j k o o u h bg b o o  n oi oi noi noi n oin oin
      a b n j j k o o u h bg b o o  n oi oi noi noi n oin oin
      </div>
      `,

      publishedAt: new Date(),
      url: 'http://test.modyo.com',
    };
    const wrapper = shallowMount(PostCard, {
      propsData: { ...props },
    });
    expect(wrapper.text()).toContain(props.excerpt);
    expect(wrapper.find('img').attributes('src')).toEqual(props.image);
    expect(wrapper.text()).toContain(props.title);
    expect(wrapper.find('.btn').attributes('href')).toContain(props.url);
    expect(wrapper.find('.btn').attributes('href')).toContain(props.url);
  });
});
