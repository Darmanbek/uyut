import { createFileRoute } from "@tanstack/react-router"
import { Col, Row } from "antd"
import { FinancesByDateChart } from "src/components/screens/finances"

export const Route = createFileRoute("/_layout/finances/coming-products")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<>
			<Row gutter={20} style={{ rowGap: 20 }}>
				<Col span={8}>
					<FinancesByDateChart url={"products"} type={"year"} />
				</Col>
				<Col span={16}>
					<FinancesByDateChart url={"products"} type={"month"} />
				</Col>
				<Col span={24}>
					<FinancesByDateChart url={"products"} type={"days"} />
				</Col>
			</Row>
		</>
	)
}
