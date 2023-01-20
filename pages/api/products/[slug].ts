import type { NextApiRequest, NextApiResponse } from "next"
import { db } from "../../../database"
import { IProduct } from "../../../interfaces"
import { Product } from "../../../models"

type Data =
	| {
			message: string
	  }
	| IProduct

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	switch (req.method) {
		case "GET":
			return getProductBySlug(req, res)

		default:
			return res.status(400).json({
				message: "Bad reques",
			})
	}

	res.status(200).json({
		message: "A codear",
	})
}

const getProductBySlug = async (
	req: NextApiRequest,
	res: NextApiResponse<Data>
) => {
	// get the slug from the request
	const { slug } = req.query

	// get the product from the database
	await db.connect()

	const product = await Product.findOne({ slug }).lean()

	await db.disconnect()

	// if the product does not exist, return a 404
	if (!product) {
		return res.status(404).json({
			message: "Product not found",
		})
	}

	// return the product
	return res.status(200).json(product)
}
