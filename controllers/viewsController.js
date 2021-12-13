const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOverview = catchAsync(async (req, res, next) => {
  //1) Get Tour data from collection

  //2) Build template
  //3) render that templet using tour data from 1)
  res.status(200).render('overview', {
    title: 'Crefts',
  });
});