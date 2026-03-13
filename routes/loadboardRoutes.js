const express = require('express')

const {
  getAllLoadboard,
  getLoadboard,
  createLoadboard,
  updateLoadboard,
  deleteLoadboard,
} = require('./../controllers/loadboardController')

const router = express.Router()

router.route('/').get(getAllLoadboard).post(createLoadboard)

router
  .route('/:id')
  .get(getLoadboard)
  .patch(updateLoadboard)
  .delete(deleteLoadboard)

module.exports = router
