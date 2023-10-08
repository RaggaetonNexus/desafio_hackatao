import Request from "../models/Request.js";

const getAll = async (req, res, next) => {
  try {
    const requests = await Request.findAll();
    res.status(200).json(requests);
  } catch (error) {
    next(error);
  }
}

const getById = async (req, res, next) => {
  try {
    let id = req.params.id;
    const request = await Request.findByPk(id);
    res.status(200).json(request);
  } catch (error) {
    next(error);
  }
}

const edit = async (req, res, next) => {
  try {
    let id = req.params.id;
    let paramtoupdate = req.body;
    const updated = await Request.update(paramtoupdate , {where: {_id: id }})
    res.status(200).json({ updateComplete: updated > 0 });
  } catch (error) {
    next(error);
  }
}

const deleteById = async (req, res, next) => {
  try {
    let id = req.params.id;
    const deletedLines = await Request.destroy({where: {_id: id }});
    res.status(200).json({deleteComplete: deletedLines>0});
  } catch (error) {
    next(error);
  }
}

const create = async (req, res, next) => {
  try {
    let request = req.body;
    console.log(request)
    const newRequest = await Request.create(request);
    res.status(201).json(newRequest);
  } catch (error) {
    next(error);
  }
}

export { getAll, getById, create, edit, deleteById };
