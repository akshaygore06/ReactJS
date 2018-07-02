// This unit test spec uses Jest: https://facebook.github.io/jest/docs/en/getting-started.html

import React from 'react';
import renderer from 'react-test-renderer';

import AppUtils from './utils/AppUtils';
import Header from './components/Header';

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

test('fetch data of 10 users', () => {
    expect.assertions(1);
    return AppUtils.fetchData().then(data => {
        expect(data.length).toBe(10);
    });
});

test('render a header', () => {
    const component = renderer.create(
        <Header />
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
});
