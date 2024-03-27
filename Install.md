# Instalación del Entorno

- Instalación de librería inicial

```bash
    npm init -y

    npm install typescript ts-node-dev --save-dev

    npx tsc --init

```

- Modifica el archivo tsconfig.json

```bash

{
  "compilerOptions": {
    "experimentalDecorators": true,
    "target": "ES2021",
    "lib": [
      "ES2021"
    ],
    "module": "commonjs",
    "rootDir": "./src",
    "moduleResolution": "node",
    "types": [
      "node"
    ],
    "outDir": "./build",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  },
  "exclude": [
    "node_modules"
  ]
}

```

- Proporciona los comandos para ejecutar el proyecto se modifica el archivo package.json:

```bash

"scripts": {
    "dev": "ts-node-dev --respawn src/index.ts",
    "build": "tsc",
    "start": "node build/index.js"
},

```

- Instalación de paquetes

```bash

  # Express es un marco de aplicación web para Node.js que proporciona un conjunto robusto de características para aplicaciones web y móviles1.
  npm i express

  # CORS es un paquete de Node.js que proporciona un middleware para habilitar CORS (Intercambio de Recursos de Origen Cruzado)
  npm i cors

  # Body-parser es un middleware que se utiliza para analizar los cuerpos de las solicitudes entrantes en un middleware antes de tus manejadores
  npm i body-parser

  # Dotenv es un módulo que carga variables de entorno de un archivo .env a process.env. Es útil para separar la configuración del entorno del código
  npm i dotenv

  # pg es un cliente PostgreSQL para Node.js. Proporciona una interfaz para interactuar con tu base de datos PostgreSQL desde Node.js
  npm i pg

  # Crypto-js es una biblioteca de JavaScript que proporciona implementaciones de estándares criptográficos. Se utiliza para realizar operaciones criptográficas como el cifrado y el descifrado de datos.
  npm i crypto-js

  #  Jsonwebtoken es una implementación de tokens web JSON. Esta biblioteca permite generar, decodificar, verificar y firmar tokens JWT. Los tokens JWT son una forma segura de transmitir información entre partes como un objeto JSON
  npm i jsonwebtoken

  # Zod es una biblioteca de declaración y validación de esquemas en TypeScript. Permite definir y validar esquemas de datos de manera eficiente y segura
  npm i zod

  # Date-fns es una biblioteca moderna de utilidades de JavaScript para trabajar con fechas. Proporciona una serie de funciones útiles para manipular fechas en una aplicación de JavaScript
  npm i date-fns

  # @apollo/server es un servidor GraphQL de código abierto compatible con cualquier cliente GraphQL, incluyendo Apollo Client. Se puede utilizar como un servidor GraphQL independiente
  npm i @apollo/server graphql

  # Graphql-tag es una biblioteca que proporciona una etiqueta literal de plantilla JavaScript que analiza las cadenas de consulta GraphQL en el AST (Árbol de Sintaxis Abstracta) estándar de GraphQL
  npm i graphql-tag

  # @graphql-tools/schema es una biblioteca que proporciona un conjunto de utilidades para el desarrollo más rápido de herramientas GraphQL
  npm i @graphql-tools/schema

  npm i compression


  npm i @types/pg @types/cors @types/express @types/node @types/crypto-js @types/jsonwebtoken @types/compression -D

```

- Instalación de paquete para hacer Test

```bash
  npm install -D vitest


  "scripts": {
    ...
    test:"vitest"
  },
```
