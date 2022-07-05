'use strict';
module.exports = (req, res, next) => {
  res.status(404).send({
    code: '404',
    path: req.path,
    message: `page not found `,
  });
};
