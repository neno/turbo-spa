import type { Meta, StoryObj } from '@storybook/react';
import {Hero} from "@josip/hero";


const meta: Meta<typeof Hero> = {
  component: Hero,
  title: 'Example/Hero',
  args: {
    name: 'Hero Name',
  }
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  render: () => <Hero name="Hero Name" />,
};