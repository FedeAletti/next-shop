import React from "react"
import ShopLayout from "../../components/layouts/ShopLayout"
import { Typography, Grid, Chip, Link } from "@mui/material"
import {
	DataGrid,
	GridRowsProp,
	GridColDef,
	GridRenderCellParams,
} from "@mui/x-data-grid"
import NextLink from "next/link"

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 100 },
	{ field: "fullName", headerName: "Nombre Completo", width: 300 },
	{
		field: "paid",
		headerName: "Pagada",
		description: "Muestra información si está la orden pagada o no",
		width: 200,
		renderCell: (params: GridRenderCellParams) => {
			return params.row.paid ? (
				<Chip color="success" label="Pagada" variant="outlined" />
			) : (
				<Chip color="error" label="No pagada" variant="outlined" />
			)
		},
	},
	{
		field: "orden",
		headerName: "Ver order",
		width: 200,
		sortable: false,
		renderCell: (params: GridRenderCellParams) => {
			return (
				<NextLink href={`/orders/${params.row.id}`} passHref legacyBehavior>
					<Link underline="always">Ver orden</Link>
				</NextLink>
			)
		},
	},
]
const rows: GridRowsProp = [
	{ id: 1, paid: true, fullName: "Juan Perez" },
	{ id: 2, paid: false, fullName: "Maria Lopez" },
	{ id: 3, paid: true, fullName: "Pedro Sanchez" },
	{ id: 4, paid: true, fullName: "Jose Gonzalez" },
	{ id: 5, paid: false, fullName: "Luisa Martinez" },
	{ id: 6, paid: true, fullName: "Carlos Ramirez" },
]

const HistoryPage = () => {
	return (
		<ShopLayout
			title="Historial de ordenes"
			pageDescription="Este es tu historial de ordenes">
			<Typography variant="h1" component="h1" sx={{ mb: 3 }}>
				Historial de órdenes
			</Typography>

			<Grid container>
				<Grid item xs={12} sx={{ height: 650, width: "100%" }}>
					<DataGrid
						rows={rows}
						columns={columns}
						pageSize={10}
						rowsPerPageOptions={[10]}
					/>
				</Grid>
			</Grid>
		</ShopLayout>
	)
}

export default HistoryPage
