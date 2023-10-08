import Provider from "../models/Provider.js";

const getAll = async (req, res, next) => {
  try {
    const providers = await Provider.findAll();
    res.status(200).json(providers);
  } catch (error) {
    next(error);
  }
}

const getById = async (req, res, next) => {
  try {
    let id = req.params.id;
    const provider = await Provider.findByPk(id);
    res.status(200).json(provider);
  } catch (error) {
    next(error);
  }
}

const edit = async (req, res, next) => {
  try {
    let id = req.params.id;
    let paramtoupdate = req.query.name;
    const updated = await Provider.update({name:paramtoupdate},{where: {_id: id }})
    res.status(200).json({ updateComplete: updated > 0 });
  } catch (error) {
    next(error);
  }
}

const deleteById = async (req, res, next) => {
  try {
    let id = req.params.id;
    const deletedLines = await Provider.destroy({where: {_id: id }});
    res.status(200).json({deleteComplete: deletedLines>0});
  } catch (error) {
    next(error);
  }
}

const create = async (req, res, next) => {
  try {
    let provider = {
      name: req.query.name
    }
    console.log(provider)
    const newProvider = await Provider.create(provider);
    res.status(201).json(newProvider);
  } catch (error) {
    next(error);
  }
}

export { getAll, getById, create, edit, deleteById };
