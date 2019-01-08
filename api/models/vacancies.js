'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Vacancies = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    title: {
      type: String,
      default: "Название не указано"
    },
    phone: {
      type: String,
      default: "Телефон не указан"
    },
    salary: {
      type: String,
      default: "Зарплата не указана"
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

mongoose.model('vacancies', Vacancies);