module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost', // probably wrong
      // port: 8080, // probably wrong
      database: 'avatars',
      user: 'postgres',
      password: 'password',
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 100,
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds/dev',
    },
  },

}