

interface ResponseEmail {
  message: string
}

export default async function fetchEmail(email: string): Promise<boolean> {
  try {
    const url = "https://api-portafolio-5og3.onrender.com/api/email/subcription";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        "email": email,
      }),
    });
    const data: ResponseEmail = await response.json();

    if (data.message === "Email enviado correctamente") {
      return true;
    } else {
      return false
    }
  } catch (error) {
    return false;
  }
}