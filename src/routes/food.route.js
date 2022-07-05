'use strict';
const express = require('express');

const foodRouter = express.Router();

foodRouter.get('/food', getFoods);
foodRouter.get('/food/:id', getOneFood);

async function getFoods(req, res) {
  res
    .status(200)
    .send(
      'Congrats, You have got all the food in the village, now poeple will die out of hunger'
    );
}
async function getOneFood(req, res) {
  let foodId = parseInt(req.params.id);

  res
    .status(200)
    .send(`You have got ${foodId}, now people will not die out of hunger`);
}

module.exports = foodRouter;
