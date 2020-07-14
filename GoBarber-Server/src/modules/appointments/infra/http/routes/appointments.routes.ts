import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import AppointmentsController from '../controllers/AppointmentsController';

const appoitmentsRouter = Router();
const appointmentsController = new AppointmentsController();

// aplica em todas as rotas de agendamento
appoitmentsRouter.use(ensureAuthenticated);

// appoitmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentRepository.find();

//   return response.json(appointments);
// });

appoitmentsRouter.post('/', appointmentsController.create);
export default appoitmentsRouter;
