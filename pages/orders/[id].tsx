import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material"
import {
	Box,
	Button,
	Card,
	CardContent,
	Chip,
	Divider,
	Grid,
	Link,
	Typography,
} from "@mui/material"
import NextLink from "next/link"
import React from "react"
import { CartList, OrderSummary } from "../../components/cart"
import ShopLayout from "../../components/layouts/ShopLayout"

const OrderPage = () => {
	return (
		<ShopLayout
			title={`Resumen de la orden ${123}`}
			pageDescription="Resumen de la orden">
			<Typography variant="h1" component="h1" sx={{ mb: 2 }}>
				Orden: ABC123
			</Typography>

			<Chip
				sx={{
					my: 2,
				}}
				label="Pendiente de pago"
				variant="outlined"
				color="error"
				icon={<CreditCardOffOutlined />}
			/>
			<Chip
				sx={{
					my: 2,
				}}
				label="Orden ya pagada"
				variant="outlined"
				color="success"
				icon={<CreditScoreOutlined />}
			/>

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
								<h1>Pagar</h1>
								<Chip
									sx={{
										my: 2,
									}}
									label="Orden ya pagada"
									variant="outlined"
									color="success"
									icon={<CreditScoreOutlined />}
								/>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</ShopLayout>
	)
}

export default OrderPage
