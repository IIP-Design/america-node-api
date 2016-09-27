// Update with your config settings.

module.exports = {
  test: {
    client: 'mysql',
    connection: {
      database: 'api_america_test',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
        directory: 'db/migrations'
    },
    seeds: {
      directory: 'db/seeds/test'
    }
  },

  development: {
    debug: true,
    client: 'mysql',
    connection: {
      database: 'api_america',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
        directory: 'db/migrations'
    },
    seeds: {
      directory: 'db/seeds/development'
    }
  },

  production: {
    client: 'mysql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
       directory: 'db/migrations'
    },
    seeds: {
       directory: 'db/seeds/production'
    }
  }

};
