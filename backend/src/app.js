import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import routes from './api';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/live-react-node', { useNewUrlParser: true });
routes(app);

app.listen(9000, () => console.log('Express server started...'));