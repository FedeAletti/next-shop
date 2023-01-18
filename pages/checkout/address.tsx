import {
	Box,
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material"
import React from "react"
import ShopLayout from "../../components/layouts/ShopLayout"

const AddressPage = () => {
	return (
		<ShopLayout
			title="Dirección"
			pageDescription="Confirmar dirección del destino">
			<Typography variant="h1" component={"h1"}>
				Dirección
			</Typography>

			<Grid container spacing={2} sx={{ mt: 2 }}>
				<Grid item xs={12} sm={6}>
					<TextField label="Nombre" variant="filled" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label="Apellido" variant="filled" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label="Direccion" variant="filled" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label="CP" variant="filled" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label="Ciudad" variant="filled" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<Select variant="filled" label="País" value={1}>
							<MenuItem value={1}>Costa Rica</MenuItem>
							<MenuItem value={2}>Honduras</MenuItem>
							<MenuItem value={3}>Argentina</MenuItem>
						</Select>
					</FormControl>
				</Grid>
			</Grid>

			<Box sx={{ mt: 5 }} display="flex" justifyContent={"center"}>
				<Button color="secondary" className="circular-btn" size="large">
					Revisar Pedido
				</Button>
			</Box>
		</ShopLayout>
	)
}

export default AddressPage
