import { Box, Button, Grid, TextField, Typography, Link } from "@mui/material"
import React from "react"
import { AuthLayout } from "../../components/layouts/AuthLayout"
import NextLink from "next/link"

const RegisterPage = () => {
	return (
		<AuthLayout title="Registrar">
			<Box sx={{ width: 350, padding: "10px 20px" }}>
				<Grid container>
					<Grid item xs={12}>
						<Typography variant="h1" component={"h1"}>
							Crear cuenta
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<TextField label="Nombre completo" variant="filled" fullWidth />
					</Grid>
					<Grid item xs={12}>
						<TextField label="Correo" variant="filled" fullWidth />
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Contraseña"
							type="password"
							variant="filled"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							color="secondary"
							className="circular-btn"
							fullWidth
							size="large">
							Registrar
						</Button>
					</Grid>
					<Grid item xs={12} display="flex" justifyContent={"end"}>
						<NextLink href={"/auth/login"} passHref legacyBehavior>
							<Link underline="always">Ya tienes cuenta?</Link>
						</NextLink>
					</Grid>
				</Grid>
			</Box>
		</AuthLayout>
	)
}

export default RegisterPage
