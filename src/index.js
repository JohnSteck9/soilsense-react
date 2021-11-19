import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import {Amplify} from "aws-amplify";
import config from './aws-exports.js';


Amplify.configure(config)

ReactDOM.render(<AppRouter/>, document.getElementById('root'));
