const { Router } = require('express')
const { getEvents, createEvent, editEvent, deleteEvent } = require('../controllers/events')
const { validateJWT } = require('../middlewares/validateJWT')
const { check, param } = require('express-validator')
const validateErrors = require('../middlewares/ErrorHandler')
const { isDate } = require('../helpers/dateValidator')
const { existEvent, checkUserEvent } = require('../middlewares/eventMiddleware')
const router = Router()
router.use(validateJWT)
router.get('/', getEvents)

router.post('/', [
  check('title', 'Title is required').notEmpty().isLength({ min: 3, max: 100 }),
  check('start', 'Start Date is required').notEmpty().custom(isDate),
  check('end', 'End Date is required').notEmpty().custom(isDate),
  validateErrors
], createEvent)

router.put('/:id', [
  param('id', 'Id is required and must be a valid ID').exists().isMongoId(),
  check('title', 'Title is required').notEmpty().isLength({ min: 3, max: 100 }),
  check('start', 'Start Date is required').notEmpty().custom(isDate),
  check('end', 'End Date is required').notEmpty().custom(isDate),
  validateErrors,
  existEvent,
  checkUserEvent
], editEvent)

router.delete('/:id', [
  param('id', 'Id is required and must be a valid ID').exists().isMongoId(),
  validateErrors,
  existEvent,
  checkUserEvent
], deleteEvent)

module.exports = router
