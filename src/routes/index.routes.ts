import {Router}  from 'express'
import {PriceChecker} from '../controllers/priceChecker.controller'

const router = Router();
router.post('/api/get-products-barcode', PriceChecker.getProductByBarcode)

export default router;