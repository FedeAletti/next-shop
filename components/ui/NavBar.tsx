import NextLink from "next/link"
import {
	AppBar,
	Badge,
	Box,
	Button,
	IconButton,
	Link,
	Toolbar,
	Typography,
} from "@mui/material"
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"

export const NavBar = () => {
	return (
		<AppBar position="fixed" color="primary">
			<Toolbar>
				<NextLink href={"/"} passHref legacyBehavior>
					<Link
						sx={{
							display: "flex",
							alignItems: "center",
							textDecoration: "none",
						}}>
						<Typography variant="h6">Teslo |</Typography>
						<Typography sx={{ ml: 0.5 }}>Shop</Typography>
					</Link>
				</NextLink>

				<Box flex={1} />

				<Box sx={{ display: { xs: "none", sm: "block" } }}>
					<NextLink href={"/category/men"} passHref legacyBehavior>
						<Link sx={{ textDecoration: "none" }}>
							<Button>Hombres</Button>
						</Link>
					</NextLink>
					<NextLink href={"/category/women"} passHref legacyBehavior>
						<Link sx={{ textDecoration: "none" }}>
							<Button>Mujeres</Button>
						</Link>
					</NextLink>
					<NextLink href={"/category/kid"} passHref legacyBehavior>
						<Link sx={{ textDecoration: "none" }}>
							<Button>Niños</Button>
						</Link>
					</NextLink>
				</Box>

				<Box flex={1} />

				<IconButton>
					<SearchOutlined />
				</IconButton>
				<NextLink href={"/cart"} passHref legacyBehavior>
					<Link sx={{ textDecoration: "none" }}>
						<IconButton>
							<Badge badgeContent={2} color="secondary">
								<ShoppingCartOutlined />
							</Badge>
						</IconButton>
					</Link>
				</NextLink>

				<Button>Menú</Button>
			</Toolbar>
		</AppBar>
	)
}
