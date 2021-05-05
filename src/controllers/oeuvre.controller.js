import { getAll, getById } from '../services/oeuvre.service.js';

export function getAllOeuvres(req, res, next) {
  getAll()
    .then(oeuvres => res.json({
      status: 200,
      args: oeuvres,
    }))
    .catch(next);
}


export default {};