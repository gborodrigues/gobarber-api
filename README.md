# GoBarber API project

This projects was created for study porpose. Is an API created to register
user, create appointments for these users and send email.

## How to run the project

### Prerequisites

- [Docker](https://docs.docker.com/)
- [NodeJS](https://nodejs.org/en/)

### Running the project

1. First need create the containers:

[Postgres](https://www.postgresql.org/)

```bash

docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

[Redis](https://redis.io/)

```bash
  docker run --name redisgobarber -p 6379:6379 -d -t redis:alpine
```

[MongoDB](https://www.mongodb.com/)

```bash
  git clone git@bitbucket.org:unearsa/consumer-bi-europ.gitdocker run --name mongobarber -p 27017:27017 -d -t mongo
```

2. Config the **.env** file based on **.env.example**. To config the mail settings you
   need create a account in [Mailtrap.io](https://mailtrap.io/) and get the config on
   demo box, and not very important, to config the dsn sentry you need create a account
   on [Sentry.io](https://sentry.io/) and get the dsn url on getting started.

3. On the project, run **npm install**

4. If you config the e-mail, open two terminals and run **npm run queue** and in another
   run **npm run dev**
