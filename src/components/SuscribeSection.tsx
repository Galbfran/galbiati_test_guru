

import Icon from "./Icon";
import Title from "./Title";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import validateEmail from "../const/validateEmail";
import fetchEmail from "../const/fetchEmail";
import { useLoaderStore } from "../providers/loader_provider";

export default function SuscribeSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { setLoading, setSuccess } = useLoaderStore();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      setError("");
    } else {
      setError("Please enter a valid email.");
    }
  };

  const Submit = async (): Promise<void> => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
    setLoading(true);
    const result = await fetchEmail(email);
    console.log(result);
    setLoading(false);
    setSuccess(result);
  };

  return (
    <section className="container">
      <Icon src="./src/assets/message_icon.svg" alt="logo" width={58} height={58} />
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