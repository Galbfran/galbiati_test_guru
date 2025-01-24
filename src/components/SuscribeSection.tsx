

import Icon from "./Icon";
import Title from "./Title";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

export default function SuscribeSection() {
  const [email, setEmail] = useState("");
  const Submit = (): void => {
    console.log(email);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  }
  return (
    <section className="container">
      <Icon src="./src/assets/message_icon.svg" alt="logo" width={58} height={58} />
      <Title title="subscribe" />
      <Input type="email" name="email" id="email" placeholder="Enter Your Email" change={onChange} />
      <Button text="subscribe" onClick={Submit} />
    </section>
  )
}