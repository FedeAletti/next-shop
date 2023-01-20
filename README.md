# Next.js Teslo Shop

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- El -d significa **detached**

## Configuar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

- MongoDB URL Local:

```
MONGODB_URL=mongodb://localhost:27017/teslodb
```

- Reconstruir los módulos de node y levantar Next

```
yarn install
yarn dev
```

## Llenar la DB con información de pruebas

Llamar a

```

localhost:3000/api/seed

```
