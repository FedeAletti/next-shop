import {
	Box,
	Button,
	Card,
	CardContent,
	Divider,
	Grid,
	Link,
	Typography,
} from "@mui/material"
import NextLink from "next/link"
import React from "react"
import { CartList, OrderSummary } from "../../components/cart"
import ShopLayout from "../../components/layouts/ShopLayout"

const SummaryPage = () => {
	return (
		<ShopLayout title="Resumen de orden" pageDescription="Resumen de la orden">
			<Typography variant="h1" component="h1" sx={{ mb: 2 }}>
				Resumen de la orden
			</Typography>

			<Grid container>
				<Grid item xs={12} md={7}>
					<CartList />
				</Grid>
				<Grid item xs={12} md={5}>
					<Card className="summary-card">
						<CardContent>
							<Typography variant="h2">Resumen (3 productos)</Typography>
							<Divider sx={{ my: 1 }} />

							<Box display={"flex"} justifyContent="space-between">
								<Typography variant="subtitle1">
									Dirección de entrega
								</Typography>
								<NextLink href={"/checkout/address"} passHref legacyBehavior>
									<Link underline="always">Editar</Link>
								</NextLink>
							</Box>

							<Typography>Juan Perez</Typography>
							<Typography>Calle Falsa 123</Typography>
							<Typography>Santa Fe, 3000</Typography>
							<Typography>Argentina</Typography>
							<Typography>+1 12341234</Typography>

							<Divider sx={{ my: 1 }} />

							<Box display={"flex"} justifyContent="end">
								<NextLink href={"/cart"} passHref legacyBehavior>
									<Link underline="always">Editar</Link>
								</NextLink>
							</Box>
							<OrderSummary />

							<Box
								sx={{
									mt: 3,
								}}>
								<Button color="secondary" className="circular-btn" fullWidth>
									Confirmar Orden
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</ShopLayout>
	)
}

export default SummaryPage
