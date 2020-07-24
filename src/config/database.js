module.exports = {
    "development": {
        dialect: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: 'docker',
        database: 'donamaid',
        define: {
            timestamps: true,
            underscored: true,
            underscoredAll: true,
        },
    },
    "production": {
        dialect: 'postgres',
        host: 'ec2-54-197-254-117.compute-1.amazonaws.com',
        username: 'pxqctadzmbjbtv',
        password: '6b7b38b3f5fc9452859d46c903cb20a566e3fa5342f31ba0161365fc3863d190',
        database: 'd9jk9jm7t3n2j4',
        use_env_variable: 'DATABASE_URL',
        define: {
            timestamps: true,
            underscored: true,
            underscoredAll: true,
        },
  }
};
