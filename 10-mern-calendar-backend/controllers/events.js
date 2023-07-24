const Event = require('../models/Event')

const getEvents = async (req, res, next) => {
  const { uid } = req.user
  try {
    const events = await Event.find({ user: uid }).populate('user', ['name'])
    res.status(200).json({
      ok: true,
      events
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Internal Server Error'
    })
  }
}

const createEvent = async (req, res, next) => {
  const { title, start, end, notes = '' } = req.body
  const { uid } = req.user
  const event = new Event({ title, start, end, notes, user: uid })
  try {
    const newEvent = await event.save()
    res.status(201).json({
      ok: true,
      newEvent
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Internal Server Error'
    })
  }
}

const editEvent = async (req, res, next) => {
  const { id, user: uid } = req.event
  const newEvent = { ...req.body, user: uid }
  try {
    const updatedEvend = await Event.findByIdAndUpdate(id, newEvent, { new: true })
    return res.status(201).json({
      ok: true,
      event: updatedEvend
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Internal Server Error'
    })
  }
}

const deleteEvent = async (req, res, next) => {
  const { id } = req.event
  try {
    await Event.findByIdAndDelete(id)
    return res.status(201).json({
      ok: true
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Internal Server Error'
    })
  }
}

module.exports = { getEvents, createEvent, editEvent, deleteEvent }
