

interface ResponseEmail {
  message: string
}

export default async function fetchEmail(email: string): Promise<boolean> {
  const url = import.meta.env.VITE_SEND_SUBSCRIBE_URL as string;

  if (!url) {
    return false;
  }

  const fetchPromise = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  }).then(async (response) => {
    const data: ResponseEmail = await response.json();
    return data.message === "Email enviado correctamente";
  }).catch(() => false);

  const timeoutPromise = new Promise<boolean>((resolve) =>
    setTimeout(() => resolve(true), 2000)
  );

  return Promise.race([fetchPromise, timeoutPromise]);
}