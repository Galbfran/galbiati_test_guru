

import Icon from "./Icon";
import Title from "./Title";
import Input from "./Input";
import Button from "./Button";
import validateEmail from "../helpers/validateEmail";
import useSuscribe from "../hooks/useSuscribe";

export default function SuscribeSection() {
  const { error, onChange, Submit } = useSuscribe();

  return (
    <section className="container">
      <Icon src="public/assets/message_image.png" alt="logo" width={58} height={58} />
      <Title title="subscribe" />
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Enter Your Email"
        change={onChange}
        validator={validateEmail}
        errorMessage={error}
      />
      <Button text="subscribe" onClick={Submit} />
    </section>
  );
}