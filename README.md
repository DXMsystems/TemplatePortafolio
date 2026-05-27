# TemplatePortafolio

Template de CV virtual hecho con React (TypeScript) + Express.js + SQLite.

---

## Requisitos previos

- **Node.js v18 LTS** — gestionado automáticamente con [nvm](https://github.com/nvm-sh/nvm)
- **nvm** — [instrucciones de instalación](https://github.com/nvm-sh/nvm#installing-and-updating)

> El proyecto incluye `.nvmrc` con `18`, así que `nvm use` selecciona la versión correcta automáticamente.

---

## Instalación rápida

```bash
git clone <url-del-repo>
cd TemplatePortafolio
./setup.sh
```

El script instala las dependencias de backend y frontend, aplica los parches necesarios y te avisa si falta algún archivo.

---

## Archivos que debes agregar manualmente

Estos archivos están en `.gitignore` y **no se incluyen en el repositorio**.

### 1. Variables de entorno — `back-end/.env`

```bash
cp back-end/.env.example back-end/.env
```

Edita `back-end/.env` con tus credenciales de Telegram:

```env
TOKEN=tu_token_de_telegram_bot
CHAT_ID=tu_chat_id_de_telegram
```

**Cómo obtener las credenciales:**
1. Busca **@BotFather** en Telegram → `/newbot` → copia el **TOKEN**
2. Busca **@userinfobot** → envía cualquier mensaje → copia tu **Id** (`CHAT_ID`)
3. Busca tu bot por username y envíale `/start`

> Las notificaciones de Telegram son opcionales. El formulario funciona sin ellas.

### 2. Archivos multimedia — `my-app/src/Pages/materials/`

| Archivo        | Descripción                            |
|----------------|----------------------------------------|
| `hacker.mp4`   | Video de fondo de la página Home       |
| `info-pic.jpg` | Foto de perfil de la página About Me   |
| `logo.png`     | Logo del Header (visible en desktop)   |
| `minilogo.png` | Logo del menú hamburguesa (mobile)     |

```bash
mkdir -p my-app/src/Pages/materials
# copia tus archivos aquí
```

---

## Estructura del proyecto

```
TemplatePortafolio/
├── my-app/           # Frontend React + TypeScript (puerto 3000 en dev)
│   ├── patches/      # Parches de compatibilidad Node 18+ (patch-package)
│   └── src/Pages/materials/   # Assets — NO incluidos en git
└── back-end/         # Backend Express.js + SQLite (puerto 8000)
    ├── .env          # Credenciales — NO incluido en git
    └── assets/       # Archivos estáticos servidos por Express
```

---

## Cómo correr en local

### Modo desarrollo (2 terminales)

**Terminal 1 — Backend:**
```bash
cd back-end
node index.js
# http://localhost:8000
```

**Terminal 2 — Frontend:**
```bash
cd my-app
nvm use 18
npm start
# http://localhost:3000
```

> En modo desarrollo el formulario de contacto no llega al backend. Para probarlo, cambia temporalmente la URL en `my-app/src/Components/ContactForm/ContactForm.jsx:13`:
> ```js
> const url = "http://localhost:8000/contact-us";
> ```

### Modo producción (un solo servidor en puerto 8000)

```bash
cd my-app && npm run build && cp -r build ../back-end/build
cd ../back-end && node index.js
# http://localhost:8000
```

---

## Nota de compatibilidad

`react-scripts@5` usa internamente `memfs@3.4.1`, que tiene un bug con Node 18+ donde intenta sobreescribir la propiedad `closed` de un stream (getter de solo lectura desde Node 18).

El parche en `my-app/patches/memfs+3.4.1.patch` corrige esto y se aplica automáticamente al ejecutar `npm install` gracias al script `postinstall` en `my-app/package.json`.

---

## Docker

```bash
docker build -t porfolio .
docker run -p 8000:8000 --env-file back-end/.env porfolio
```

---

## Tecnologías

| Capa      | Tecnología                                      |
|-----------|-------------------------------------------------|
| Frontend  | React 17, TypeScript, React Bootstrap, i18next  |
| Backend   | Express.js, SQLite3, express-validator          |
| Notifs    | Telegram Bot API                                |
| Deploy    | Docker                                          |
