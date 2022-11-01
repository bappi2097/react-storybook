import Button from "../Components/Button"
export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = (args) => <Button {...args} />

export const Red = Template.bind({})

Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
}

export const Green = Template.bind({})

Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
}

export const LongLabel = Template.bind({})

LongLabel.args = {
  backgroundColor: "red",
  label: "Press Me lorem Press Me lorem Press Me lorem",
  size: "md",
}
