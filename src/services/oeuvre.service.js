import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Oeuvre from '../models/oeuvre.model.js';
import config from '../configs/config.js';


// getAll
// *******************
export async function getAll() {
  return await Oeuvre.findAll();
}

// getByID
// *******************
export async function getById(id) {
  return await getOeuvre(id);
}



// helper functions
async function getOeuvre(id) {
  const oeuvre = await Oeuvre.findByPk(id);
  if (!oeuvre) throw 'User not found';
  return oeuvre;
}

export default {}