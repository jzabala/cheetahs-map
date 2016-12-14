import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Signup from './components/Signup';
import './index.css';

const express = require('express');
const app = express();


 ReactDOM.render( <Signup />,
                   document.getElementById('signup'));
