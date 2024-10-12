## The Country Info App

App was developed using

- Backend: Nest.js
- Frontend: React.js + Vite

### How to run

After cloning you need to run next command

```bash
$ cd ./backend/ && npm i && cd ../frontend/ && npm i && cd ..
```

Then you need to create `.env` file in both directories (backend and frontend), you can find `.env.example` file with what you need to have in this (`.env`) file

After this you can run backend by the following command

```bash
$ cd ./backend/ && npm run start:dev
```

And frontend in separate terminal with this command

```bash
$ cd ./frontend/ && npm run dev
```

### Additionally

You can also run `eslint` (in both: backend and frontend) by the next command

```bash
$ npm run lint
```

And `prettier` format with the next command

```bash
$ npm run format
```