import Appointment from '../entities/Appointments';

export default interface IAppointmentsRepository {
  findByDate(date: Date): Promise<Appointment | undefined>;
}
