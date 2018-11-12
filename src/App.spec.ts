import { shallowMount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';

import App from './App.vue';

describe('App component', () => {
  let app: Wrapper<Vue>;

  beforeEach(() => {
    app = shallowMount(App, {
      stubs: ['b-container', 'router-view'],
    });
  });

  it('renders the ad by default', () => {
    expect(app.find('#ad')).toBeTruthy();
  });
});
