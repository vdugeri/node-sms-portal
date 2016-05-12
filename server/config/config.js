'use strict';

var development = {
  database: {
    url: 'postgres://postgres:password@localhost:5432/sms_portal',
    port: '5432',
    host: 'localhost'
  },
  token: {
    secret: 'someRandomString'
  }
};

var production = {
  database: {
    url: process.env.DATABASE_URL,
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST
  },
  token: {
    secret: 'someRandomString'
  }
};

var test = {
  database: {
    url: process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/sms_portal_test',
    port: process.env.DATABASE_PORT || '5432',
    host: process.env.DATABASE_HOST || 'localhost'
  },
  token: {
    secret: 'someRandomString'
  }
};


var config = {
  development: development,
  production: production,
  test: test
};

module.exports = config;
