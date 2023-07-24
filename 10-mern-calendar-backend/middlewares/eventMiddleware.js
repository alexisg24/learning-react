const Event = require('../models/Event')

const existEvent = async (req, res, next) => {
  const { id } = req.params
  try {
    const event = await Event.findById(id)
    if (!event) {
      return res.status(404).json({ ok: false, msg: 'Event not found' })
    }
    req.event = event
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Internal Server Error'
    })
  }

  next()
}

const checkUserEvent = async (req, res, next) => {
  const event = req.event
  const { uid } = req.user
  try {
    if (event.user.toString() !== uid) {
      return res.status(401).json({ ok: false, msg: 'Not authorized' })
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Internal Server Error'
    })
  }
  next()
}

module.exports = { existEvent, checkUserEvent }
