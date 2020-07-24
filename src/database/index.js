import Sequelize from 'sequelize';

import Client from '../app/models/Client';
import Professional from '../app/models/Professional';
import Adress from '../app/models/Adress';
import Order from '../app/models/Order';

import databaseConfig from '../config/database';

const models = [Client, Professional, Adress, Order];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig.production.database, databaseConfig.production.username, databaseConfig.production.password, {
      host: databaseConfig.production.host,
      dialect:'postgres',
      quoteIdentifiers: false,
      define: {
            "timestamps": true,
            "underscored": true,
            "underscoredAll": true,
        }
    });    
    models.map((model) => model.init(this.connection));
    models.map((model) => model.associate(this.connection.models));
  }
}

export default new Database();
