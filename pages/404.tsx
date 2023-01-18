import { Box, Typography } from "@mui/material"
import React from "react"
import ShopLayout from "../components/layouts/ShopLayout"

const Custom404Page = () => {
	return (
		<ShopLayout title="Page not found" pageDescription="Nada que mostrar">
			<Box
				sx={{
					flexDirection: { xs: "column", sm: "row" },
				}}
				display="flex"
				justifyContent="center"
				alignItems="center"
				height="calc(100vh - 200px">
				<Typography variant="h1" component="h1" fontSize={80} fontWeight={200}>
					404 |
				</Typography>
				<Typography marginLeft={2}>
					No encontramos ninguna página aquí
				</Typography>
			</Box>
		</ShopLayout>
	)
}

export default Custom404Page
