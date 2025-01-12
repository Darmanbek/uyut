import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons"
import { createFileRoute } from "@tanstack/react-router"
import { Card, Col, Row, Statistic } from "antd"

export const Route = createFileRoute("/_layout/")({
	component: HomeComponent
})

function HomeComponent() {
	return (
		<Row gutter={16}>
			<Col span={6}>
				<Card bordered={false}>
					<Statistic
						title={"Active"}
						value={11.28}
						precision={2}
						valueStyle={{ color: "#3f8600" }}
						prefix={<ArrowUpOutlined />}
						suffix={"%"}
					/>
				</Card>
			</Col>
			<Col span={6}>
				<Card bordered={false}>
					<Statistic
						title={"Idle"}
						value={9.3}
						precision={2}
						valueStyle={{ color: "#cf1322" }}
						prefix={<ArrowDownOutlined />}
						suffix={"%"}
					/>
				</Card>
			</Col>
			<Col span={6}>
				<Card bordered={false}>
					<Statistic
						title={"Active"}
						value={11.28}
						precision={2}
						valueStyle={{ color: "#3f8600" }}
						prefix={<ArrowUpOutlined />}
						suffix={"%"}
					/>
				</Card>
			</Col>
			<Col span={6}>
				<Card bordered={false}>
					<Statistic
						title={"Idle"}
						value={9.3}
						precision={2}
						valueStyle={{ color: "#cf1322" }}
						prefix={<ArrowDownOutlined />}
						suffix={"%"}
					/>
				</Card>
			</Col>
		</Row>
	)
}
