import { createFileRoute } from "@tanstack/react-router"
import { Col, Row } from "antd"
import { ComingProductsByYearChart } from "src/components/screens/coming-products"

export const Route = createFileRoute("/_layout/finances/coming-products")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<Row gutter={20} style={{ rowGap: 20 }}>
				<Col span={8}>
					<ComingProductsByYearChart />
				</Col>
			</Row>
		</>
	)
}
