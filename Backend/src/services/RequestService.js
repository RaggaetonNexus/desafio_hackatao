import Request from "../models/Request.js";

const getAll = async (req, res, next) => {
  const requests = await Request.findAll();
  res.status(200).json(requests);
}
const getById = async (req, res, next) => {
  let id = req.params.id;
  const request = await Request.findByPk(id);
  res.status(200).json(request);
}
const edit = async (req, res, next) => {
  let id = req.params.id;
  let paramtoupdate = req.query.name;
  const updated = await Request.update({name:paramtoupdate},{where: {_id: id }})
  res.status(200).json({ updateComplete: updated > 0 });
}
const deleteById = async (req, res, next) => {
  let id = req.params.id;
  const deletedLines = await Request.destroy({where: {_id: id }});
  res.status(200).json({deleteComplete: deletedLines>0});
}



const create = async (req, res, next) => {
  let request = {
    name: req.query.name
  }
  console.log(request)
  const newRequest = await Request.create(request);
  res.status(201).json(newRequest);
}

export { getAll, getById, create, edit, deleteById };
