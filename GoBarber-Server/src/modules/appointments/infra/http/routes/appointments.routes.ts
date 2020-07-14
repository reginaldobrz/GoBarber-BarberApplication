import { Router } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appoitmentsRouter = Router();

// aplica em todas as rotas de agendamento
appoitmentsRouter.use(ensureAuthenticated);

// appoitmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentRepository.find();

//   return response.json(appointments);
// });

appoitmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);

  const createAppointment = container.resolve(CreateAppointmentService);

  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider_id,
  });

  return response.json({ appointment });
});
export default appoitmentsRouter;
