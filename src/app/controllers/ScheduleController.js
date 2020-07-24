// import * as Yup from 'yup';

import Order from '../models/Order';
// import Professional from '../models/Professional';
// import Adress from '../models/Adress';

class ScheduleController {
  async index(req, res) {
    const client_id = req.clientId;
    // const { adress_id } = req.query;

    const schedules = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    const ordersClient = await Order.findAll({
      where: { client_id },
      attributes: ['schedule', 'duration'],
    });

    // let aux = -1;

    const scheduleVerify = schedules.map((schedule) => {
      // eslint-disable-next-line no-plusplus
      // for (let index = 0; index < ordersClient.length; index++) {
      //   if (aux < ordersClient[index].schedule - schedule) {
      //     aux = ordersClient[index].schedule;
      //   }
      // }
      // console.log(aux);
      // const duration = aux - schedule;
      const isAvailable = ordersClient.every(
        (order) =>
          schedule < order.schedule ||
          schedule >= order.schedule + order.duration
      );
      return {
        hour: schedule,
        isAvailable,
        // duration: isAvailable ? duration : 0,
      };
    });

    return res.json(scheduleVerify);
  }
}

export default new ScheduleController();
