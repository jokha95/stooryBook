import React from "react";
import Keyboard from "./Keyboard";

export default {
  title: "atoms/KeyButton",
  component: Keyboard,
  argTypes: {
    handleKeyboradEvent: {
      action: "Clicked",
    },
    keyValue: {
      control: "text",
    },
    keyIndex: {
      control: "number",
    },
  },
};

const FirstStory = (args) => <Keyboard {...args} />;

export const KeyButtonDefault = FirstStory.bind({});
KeyButtonDefault.args = {
  keyValue: "p",
  keyIndex: 0,
};
