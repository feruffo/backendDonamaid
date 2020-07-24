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
//     this.connection = new Sequelize(databaseConfig);
    this.connection = new Sequelize('d9jk9jm7t3n2j4', 'pxqctadzmbjbtv', '6b7b38b3f5fc9452859d46c903cb20a566e3fa5342f31ba0161365fc3863d190', {
      host: 'ec2-54-197-254-117.compute-1.amazonaws.com',
      dialect:'postgres'
    });
    
    models.map((model) => model.init(this.connection));
    models.map((model) => model.associate(this.connection.models));
  }
}

export default new Database();
