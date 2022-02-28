import React from 'react';

import IndexPage from '../pages/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'IndexPage',
  component: IndexPage,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <IndexPage {...args} />;

export const Page = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Page.args = {
};
