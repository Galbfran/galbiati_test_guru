# Franco Galbiati Test Guru
```
dev: Franco Galbiati
puesto: Full Stack Developer
tel: +54-11-6227-1014
email: francogalbiati984@gmail.com
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
Carga del estado global: Se obtiene isLoading y isSuccess del contexto useLoaderStore.

Condiciones de renderizado:

1. Si isLoading es true, se muestra <Loader />.

2. Si isLoading es false y isSuccess también es false, se muestra <SuscribeSection />.

3. Si isLoading es false y isSuccess es true, se muestra <SubcribeSucces />.

Pie de página: Se renderiza el texto rightsReserved usando el componente <Span />.
```



