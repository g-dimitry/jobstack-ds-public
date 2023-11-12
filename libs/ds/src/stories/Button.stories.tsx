import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/button";
import { DSProvider } from "../components/ds-provider";
import { theme } from "./theme";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  render: (args) => (
    <DSProvider theme={theme}>
      <Button {...args} />
    </DSProvider>
  ),
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    as: {
      description: 'Whether the element should render as button or anchor',
      options: ['a', 'button'],
    },
    children: {
      description: 'Text content',
      type: {
        required: true,
        name: 'string',
      },
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const RegularButton: Story = {
  args: {
    as: "button",
    children: "Button",
  },
};

export const DisabledButton: Story = {
  args: {
    as: "button",
    isDisabled: true,
    children: "Disabled Button",
  },
};

export const Link: Story = {
  args: {
    as: "a",
    href: "http://localhost:3000",
    target: "_blank",
    children: "Link",
  },
};
