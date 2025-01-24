import { useLoaderStore } from "../providers/loader_provider";
import Button from "./Button";
import Icon from "./Icon";
import Title from "./Title";

export default function SubcribeSucces() {
  const { setSuccess } = useLoaderStore();
  const toSuscribe = (): void => {
    setSuccess(false);
  }
  return (
    <section className="container">
      <Icon src="public/assets/message_icon.svg" alt="logo" width={58} height={58} />
      <Title title="subscribe" />
      <span >You have been successfully subscribed.</span>
      <Button text="close" onClick={toSuscribe} />
    </section>
  );
}