import { Router } from "express"

import CardController from '../controller/CardController'

const routes = Router()

routes.get('/cards',CardController.returnAll )

export default routes