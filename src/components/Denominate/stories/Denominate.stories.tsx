import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Denominate from "..";

export default {
  title: "Components/Denominate",
  component: Denominate,
  argTypes: {},
} as ComponentMeta<typeof Denominate>;

const Template: ComponentStory<typeof Denominate> = (args) => (
  <Denominate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: "10000000000000000000",
};
