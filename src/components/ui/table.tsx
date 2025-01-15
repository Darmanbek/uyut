import {
	Table as AntdTable,
	Flex,
	Space,
	Typography,
	type TableProps as AntdTableProps
} from "antd"
import type { AnyObject } from "antd/es/_util/type"
import type { ReactNode } from "react"

interface TableProps<T> extends Omit<AntdTableProps<T>, "title"> {
	title?: string
	extra?: ReactNode
}

const Table = <T extends AnyObject>({
	title,
	extra,
	...rest
}: TableProps<T>) => {
	return (
		<AntdTable<T>
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
	)
}

export { Table }
