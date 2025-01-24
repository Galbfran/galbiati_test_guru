# Franco Galbiati Test Guru
```
Dev: Franco Galbiati
position: Full Stack Developer
tel: +54-11-6227-1014
email: francogalbiati984@gmail.com
```
# Deploy
execute
```
rm -rf dist
npm run build
npm run deploy
```


# React + TypeScript + Vite

import to github
```
https://github.com/Galbfran/galbiati_test_guru.git
```

execute
```
npm install
```

add .env
```
VITE_SEND_SUBSCRIBE_URL=
```

execute
```
npm run dev
```

#Page TestPage
```
Loading global state: Get isLoading and isSuccess from the useLoaderStore context.

Rendering conditions:

1. If isLoading is true, <Loader /> is displayed.

2. If isLoading is false and isSuccess is also false, <SuscribeSection /> is displayed.

3. If isLoading is false and isSuccess is true, <SubcribeSucces /> is displayed.

Footer: The rightsReserved text is rendered using the <Span /> component.
```

# Project File Structure
This project is organized using a modular structure to keep the code clean and maintainable. Below is a breakdown of the key directories and their roles:

1️⃣ assets/
```
Stores static assets like SVG icons.
Files:
message_icon.svg: Likely an icon for messages.
react.svg: React logo or related icon.
```

2️⃣ components/
```
Contains reusable UI components.
Files:
Button.tsx: Custom button component.
Icon.tsx: Component for rendering icons.
Input.tsx: Custom input field component.
Loader.tsx: Displays a loading animation.
Span.tsx: Likely a wrapper for inline text styling.
SubcribeSucces.tsx: Displays a success message after subscribing.
SuscribeSection.tsx: Contains the subscription form.
Title.tsx: A title component for headings.
```

3️⃣ helpers/
```
Contains utility/helper functions used across the app.
Files:
fetchEmail.ts: Handles email subscription API requests.
rightsReserved.ts: Contains copyright or legal text.
validateEmail.ts: Function to validate email addresses.
```

4️⃣ hooks/
```
Contains custom React hooks for managing logic.
Files:
useSuscribe.tsx: Likely handles subscription-related logic.
```

5️⃣ page/
```
Contains the main pages of the app.
Files:
TestPage.tsx: The main page component that manages the UI flow.
```

6️⃣ providers/
```
Contains state management logic using context or state libraries.
Files:
loader_provider.ts: Manages loading state (probably using React Context or Zustand).
```

7️⃣ Root Files
```
App.tsx: The main React component that renders the application.
App.css, index.css, and main.tsx: Styles and entry point of the app.
vite-env.d.ts: TypeScript environment configuration for Vite.
```


# 🔹 Summary
This project is well-structured with a clear separation of concerns:

Reusable UI elements are in the components/ folder.
Business logic is managed in helpers/ and hooks/.
State management is in providers/.
Pages are inside the page/ directory.
Static assets are inside assets/.
This modular approach improves scalability, maintainability, and readability. 🚀

Let me know if you need more details! 😊

