import { Request, Response } from "express";
import { getConnection } from "../database";

interface IsearchProduct {
  barcode: string;
}

export class PriceChecker {
  /**
   * Consultar productos por codigo de barras
   */

  static getProductByBarcode = async (req: Request, res: Response) => {
    let conn;
    try {
      conn = await getConnection();
      const barcodeBody: IsearchProduct = req.body.barcode;
      const searchProductBarcode = await conn.query(`SELECT
                    descripcion, precioventa, codigo, productos.valorico, productos.idproducto, barrasprod.barcode, productos.barcode
                FROM
                   productos
                   LEFT JOIN 
                   barrasprod ON productos.idproducto = barrasprod.idproducto
                WHERE
                     productos.barcode = ${barcodeBody} OR barrasprod.barcode = ${barcodeBody}
                GROUP BY
                    productos.idproducto`);
      return res.status(200).json(searchProductBarcode[0]);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error });
    } finally {
      if (conn) {
        conn.release();
      }
    }
  };
}
