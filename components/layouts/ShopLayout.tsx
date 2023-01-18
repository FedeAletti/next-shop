import Head from "next/head"
import React, { FC } from "react"
import { NavBar, SideMenu } from "../ui"

interface Props {
	children: React.ReactNode
	title: string
	pageDescription: string
	imageFullUrl?: string
}

const ShopLayout: FC<Props> = ({
	children,
	title,
	pageDescription,
	imageFullUrl,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={pageDescription} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={pageDescription} />
				{imageFullUrl && <meta property="og:image" content={imageFullUrl} />}
			</Head>

			<NavBar />

			<SideMenu />

			<main
				style={{
					margin: "80px auto",
					maxWidth: "1440px",
					padding: "0 30px",
				}}>
				{children}
			</main>

			<footer></footer>
		</>
	)
}

export default ShopLayout
