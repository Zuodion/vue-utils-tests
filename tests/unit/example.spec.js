import { shallowMount, mount } from '@vue/test-utils';
import SomeComponent from '../../src/components/SomeComponent.vue';
import App from '../../src/App.vue';
import { nextTick } from 'vue';

function factorySomeComponent(props) {
  return mount(SomeComponent, {
    props
  });
}

describe('App', () => {
  it('click increment button for 3 times', async () => {
    const wrapper = mount(App);
    wrapper.find('button').trigger('click');
    wrapper.find('button').trigger('click');
    wrapper.find('button').trigger('click');
    await nextTick();
    expect(wrapper.html()).toContain('App counter: 3')
  });
});

describe('SomeComponent', () => {
  it('contain "Hello"', () => {
    const wrapper = factorySomeComponent({count: 1});
    expect(wrapper.html()).toContain('<div>Hello</div>');
  });
  it('render count when odd', () => {
    const wrapper = factorySomeComponent({count: 1});
    expect(wrapper.html()).toContain('Count: 1. Count is odd.');
  });
  it('render count when even', () => {
    const wrapper = factorySomeComponent({count: 2});
    expect(wrapper.html()).toContain('Count: 2. Count is even.');
  });
});

