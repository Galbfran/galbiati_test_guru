import { useState } from "react";
import { useLoaderStore } from "../providers/loader_provider";
import validateEmail from "../helpers/validateEmail";
import fetchEmail from "../helpers/fetchEmail";
interface useSuscribeInterface {
  email: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Submit: () => Promise<void>;
}

export default function useSuscribe(): useSuscribeInterface {
  const { setLoading, setSuccess } = useLoaderStore();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
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
    setLoading(false);
    setSuccess(result);
  };

  return {
    email,
    error,
    onChange,
    Submit
  };

}