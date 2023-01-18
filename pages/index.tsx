import ShopLayout from "../components/layouts/ShopLayout"
import Typography from "@mui/material/Typography"
import { initialData } from "../database/products"
import { ProductList } from "../components/products"

function Home() {
	return (
		<ShopLayout
			title={"Shop - Home"}
			pageDescription={"Encuentra los mejores productos"}>
			<Typography variant="h1" component={"h1"}>
				Tienda
			</Typography>
			<Typography variant="h2" component={"h2"} sx={{ mb: 1 }}>
				Todos los productos
			</Typography>

			<ProductList products={initialData.products as any} />
		</ShopLayout>
	)
}

export default Home
