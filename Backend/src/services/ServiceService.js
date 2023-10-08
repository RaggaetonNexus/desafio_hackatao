import Service from "../models/Service.js";
import ServiceTypes from "../models/serviceTypes.js";
import Provider from "../models/Provider.js";

const getAll = async(req, res, next) => {
  let services = await Service.findAll();
  let returnServices = [];
  for(let s of services){
    let retServ = {...s.dataValues};
    let provider = s.provider;
    let type = s.serviceType;
    retServ.provider = await Provider.findByPk(provider);
    
    retServ.serviceType = await ServiceTypes.findByPk(type);
    returnServices.push(retServ);
  }
  res.status(200).json(returnServices);
}

const create = async(req, res, next) => {
  let reqBody = req.body;
  if(reqBody.status == null) reqBody.status = 'planned';
  const service = await Service.create(reqBody);
  res.status(201).json(service);
}
const edit = async(req, res, next) => {
  let reqBody = req.body;
  let id = req.params.id;
  const updated = await Service.update({...reqBody}, {where: {_id: id }})
  res.status(200).json({ updateComplete: updated > 0 });
}
const deleteOne = async(req, res, next) => {
  let id = req.params.id;
  const deletedLines = await Service.destroy({where: {_id: id }});
  res.status(200).json({deleteComplete: deletedLines>0});
}

const getAllTypes = async(req, res, next) => {
  const types = await ServiceTypes.findAll();
  res.status(200).json(types);
}

const createServiceType = async (req, res, next) => {
  let newTypeReq = {
    typename: req.query.name
  }
  console.log(newTypeReq)
  const newType = await ServiceTypes.create(newTypeReq);
  res.status(201).json(newType);
}
const deleteServiceType = async (req, res, next) => {
  let id = req.params.id;
  const deletedLines = await ServiceTypes.destroy({where: {_id: id }});
  res.status(200).json({deleteComplete: deletedLines>0});
}
const statusOngoing = async (req, res, next) => {
  let id = req.params.id;
  const updated = await Service.update({status: 'ongoing'}, {where: {_id:id}})
  res.status(200).json({ updateComplete: updated > 0})
}

const finished = async (req, res, next) => {
  let id = req.params.id;
  const updated = await Service.update({status: 'finished'}, {where: {_id:id}})
  res.status(200).json({ updateComplete: updated > 0})
}

export default { getAll, create, edit, deleteOne, createServiceType, deleteServiceType, getAllTypes, statusOngoing, finished };
