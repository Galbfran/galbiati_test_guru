

import Icon from "./Icon";
import Title from "./Title";
import Input from "./Input";
import Button from "./Button";

export default function SuscribeSection() {
  return (
    <section className="container">
      <Icon src="./src/assets/message_icon.svg" alt="logo" width={58} height={58} />
      <Title title="subscribe" />
      <Input type="email" name="email" id="email" placeholder="Enter Your Email" />
      <Button text="subscribe" />
    </section>
  )
}