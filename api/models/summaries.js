'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Summaries = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    name: {
      type: String,
      default: "Имя не указано"
    },
    phone: {
      type: Number
    },
    salary: {
      type: Number
    },
    town: {
      type: String, 
      default: "Город не указан"
    },
    email: {
      type: String, 
      default: "Email не указан"
    },
    category: {
      type: String, 
      default: "Категория не указана"
    },
    text: {
      type: String, 
      default: "Текст не указан"
    }
  });

mongoose.model('summaries', Summaries);