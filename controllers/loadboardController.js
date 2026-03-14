const Loadboard = require('./../models/loadboardModel')

exports.getAllLoadboard = async (req, res) => {
  try {
    const loadboards = await Loadboard.find()

    res.status(200).json({
      message: 'success',
      results: loadboards.length,
      data: {
        loadboards,
      },
    })
  } catch (error) {
    res.status(400).json({
      message: 'fail',
      error,
    })
  }
}

exports.getLoadboard = async (req, res) => {
  res.status(200).json({
    message: 'success',
    data: null,
  })
}

exports.createLoadboard = async (req, res) => {
  try {
    const newLoadboard = await Loadboard.create(req.body)

    res.status(200).json({
      message: 'success',
      data: {
        loadboard: newLoadboard,
      },
    })
  } catch (error) {
    res.status(400).json({
      message: 'fail',
      error,
    })
  }
}

exports.updateLoadboard = async (req, res) => {
  res.status(200).json({
    message: 'success',
    data: null,
  })
}

exports.deleteLoadboard = async (req, res) => {
  res.status(200).json({
    message: 'success',
    data: null,
  })
}
