import express, { json, urlencoded } from 'express';
import { Logger } from '@promisepending/logger.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import Service from './models/Service.js';
import Provider from './models/Provider.js';
import ServiceTypes from './models/serviceTypes.js';
import Request from './models/Request.js';
import User from './models/User.js';

var port = process.env.PORT || 4000;

//routers
import serviceRouter from './routes/serviceRouter.js';
import providerRouter from './routes/providerRouter.js'
import loginRouter from './routes/loginRouter.js';
import requestRouter from './routes/requestRouter.js';

export const dataInputTypes = ['text', 'date', 'cpf', 'number'];

var app = express();

// view engine setup
const logger = new Logger({
  prefix: 'backend',
  debug: true,
  coloredBackground: true,
  allLineColored: true,
})

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/services', serviceRouter);
app.use('/providers', providerRouter);
app.use('/', loginRouter);
app.use('/request', requestRouter);

const isDev = process.env.NODE_ENV === 'development'

ServiceTypes.sync({ alter: isDev, force: false });
Service.sync({ alter: isDev });
Provider.sync({ alter: isDev });
Request.sync({alter: isDev});
User.sync({alter: isDev});

try{
  app.listen(port, () => {
    logger.info(`listening in port: ${port}`);
  });
}catch(err){
  console.log(err.message);
}


