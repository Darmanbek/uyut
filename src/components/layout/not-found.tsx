import { ArrowLeftOutlined } from "@ant-design/icons"
import { Link, NotFoundRouteProps } from "@tanstack/react-router"
import { Button, Flex, Result, Space } from "antd"
import { type FC, PropsWithChildren } from "react"
import { MainLayout } from "./main-layout"

const NotFound: FC<PropsWithChildren<NotFoundRouteProps>> = ({ children }) => {
	return (
		<MainLayout>
			<Flex align={"center"} justify={"center"} style={{ height: "100vh" }}>
				<Result
					status={"404"}
					extra={
						<Space>
							<Button
								icon={<ArrowLeftOutlined />}
								type={"primary"}
								onClick={() => window.history.back()}>
								Назад
							</Button>
							<Link
								to={"/"}
								className={"bg-cyan-600 text-white px-2 py-1 rounded uppercase font-black text-sm"}>
								На главную
							</Link>
						</Space>
					}>
					<div className={"text-gray-600 dark:text-gray-400"}>
						{children || <p>Страница, которую вы ищете, не существует.</p>}
					</div>
				</Result>
			</Flex>
		</MainLayout>
	)
}

export { NotFound }
