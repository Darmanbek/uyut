import {
	Table as AntdTable,
	ConfigProvider,
	Flex,
	Space,
	theme,
	Typography,
	type TableProps as AntdTableProps
} from "antd"
import type { AnyObject } from "antd/es/_util/type"
import type { ReactNode } from "react"
import { useTableStyles } from "./styles/use-table-styles"

interface TableProps<T> extends Omit<AntdTableProps<T>, "title"> {
	title?: string
	extra?: ReactNode
}

const Table = <T extends AnyObject>({
	title,
	extra,
	className,
	...rest
}: TableProps<T>) => {
	const { styles, cx } = useTableStyles()
	const { token } = theme.useToken()
	return (
		<ConfigProvider
			theme={{
				components: {
					Table: {
						headerBg: token.colorBgContainer
					}
				}
			}}>
			<AntdTable<T>
				className={cx(styles.table, className)}
				title={() => (
					<Flex gap={8} justify={title ? "space-between" : "end"}>
						{title && (
							<Typography.Title
								style={{
									display: "inline-block",
									overflow: "hidden",
									whiteSpace: "nowrap",
									textWrap: "nowrap",
									textOverflow: "ellipsis"
								}}
								level={4}>
								{title}
							</Typography.Title>
						)}
						<Space>{extra}</Space>
					</Flex>
				)}
				{...rest}
			/>
		</ConfigProvider>
	)
}

export { Table }
