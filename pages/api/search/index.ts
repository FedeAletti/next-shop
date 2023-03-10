import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
	message: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(400).json({
		message: "Must to specify a query to search",
	})
}
