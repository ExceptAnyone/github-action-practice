import type { Meta, StoryObj } from '@storybook/react';
import App from './App';

const meta: Meta<typeof App> = {
  title: 'Example/App',
  component: App,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The main title of the app',
    },
    showCounter: {
      control: { type: 'boolean' },
      description: 'Whether to show the counter section',
    },
    initialCount: {
      control: { type: 'number' },
      description: 'Initial value for the counter',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'Color theme for the app',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    title: 'React + Storybook',
    showCounter: true,
    initialCount: 0,
    theme: 'light',
  },
};

// 다크 테마
export const DarkTheme: Story = {
  args: {
    title: 'Dark Mode App',
    showCounter: true,
    initialCount: 0,
    theme: 'dark',
  },
};

// 카운터 없음
export const WithoutCounter: Story = {
  args: {
    title: 'Simple App',
    showCounter: false,
    theme: 'light',
  },
};

// 카운터 시작값 설정
export const WithInitialCount: Story = {
  args: {
    title: 'Pre-loaded Counter',
    showCounter: true,
    initialCount: 42,
    theme: 'light',
  },
};

// 긴 제목
export const LongTitle: Story = {
  args: {
    title:
      'This is a very long title to test how the component handles lengthy text content',
    showCounter: true,
    initialCount: 10,
    theme: 'light',
  },
};

// 다크 테마 + 높은 초기값
export const DarkWithHighCount: Story = {
  args: {
    title: 'Production Ready',
    showCounter: true,
    initialCount: 1000,
    theme: 'dark',
  },
};
