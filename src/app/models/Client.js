import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        cpf: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (client) => {
      if (client.password) {
        client.password_hash = await bcrypt.hash(client.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  static associate(models) {
    this.hasMany(models.Adress, { foreignKey: 'client_id', as: 'adresses' });
    this.hasMany(models.Order, { foreignKey: 'client_id', as: 'orders' });
  }
}

export default Client;
