import {Router}  from 'express'
import {PriceChecker} from '../controllers/priceChecker.controller'
import {connectToApi} from '../controllers/setUrlToAPi.controller'
const router = Router();
router.post('/api/get-products-barcode', PriceChecker.getProductByBarcode)
router.post('/connect-api', connectToApi)

export default router;