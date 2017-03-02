import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../../src/App';

test('renders without crashing', t => {
  const wrapper = mount(<App />)
});

test('shallow', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.contains(<h2>Welcome to React</h2>), true)
})

test('mount', t => {
  const wrapper = mount(<App />)
  const appInner = wrapper.find('.App-header')
  t.is(appInner.is('.App-header'), true)
})
