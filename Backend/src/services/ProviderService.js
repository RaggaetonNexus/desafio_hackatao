import Provider from "../models/Provider.js";

const getAll = async (req, res, next) => {
  const providers = await Provider.findAll();
  res.status(200).json(providers);
}
const getById = async (req, res, next) => {
  let id = req.params.id;
  const provider = await Provider.findByPk(id);
  res.status(200).json(provider);
}
const edit = async (req, res, next) => {
  let id = req.params.id;
  let paramtoupdate = req.query.name;
  const updated = await Provider.update({name:paramtoupdate},{where: {_id: id }})
  res.status(200).json({ updateComplete: updated > 0 });
}
const deleteById = async (req, res, next) => {
  let id = req.params.id;
  const deletedLines = await Provider.destroy({where: {_id: id }});
  res.status(200).json({deleteComplete: deletedLines>0});
}



const create = async (req, res, next) => {
  let provider = {
    name: req.query.name
  }
  console.log(provider)
  const newProvider = await Provider.create(provider);
  res.status(201).json(newProvider);
}

export { getAll, getById, create, edit, deleteById };
