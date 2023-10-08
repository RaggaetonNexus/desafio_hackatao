import User from "../models/User.js";

const getAll = async (req, res, next) => {
  const users = await User.findAll();
  let response = [...users]
  for(let u in users){
    response[u].password = null;
  }
  res.status(200).json(response);
  }
const getById = async (req, res, next) => {
  let id = req.params.id;
  const user = await User.findByPk(id);
  let response = {...user}
  response.password = null;
  res.status(200).json(response);
}
const edit = async (req, res, next) => {
  let id = req.params.id;
  let paramtoupdate = req.query.name;
  const updated = await User.update({name:paramtoupdate},{where: {_id: id }})
  res.status(200).json({ updateComplete: updated > 0 });
}
const deleteById = async (req, res, next) => {
  let id = req.params.id;
  const deletedLines = await User.destroy({where: {_id: id }});
  res.status(200).json({deleteComplete: deletedLines>0});
}

const create = async (req, res, next) => {
  let user = {
    name: req.query.name
  }
  console.log(user)
  const newUser = await User.create(user);
  res.status(201).json(newUser);
}

const login = async (req, res, next) =>{
  let logUser = req.body;
  const userFound = await User.findByPk(logUser.cpf);
  if(userFound.password !== logUser){
    return res.status(400).json({
      error: "invalid credentials"
    })
  }
  let response = {...logUser}
  response.password = null;
  return res.status(200).json(response);
}

export { getAll, getById, create, edit, deleteById, login };
