import { PlusOutlined } from "@ant-design/icons"
import type { FC } from "react"
import { Button } from "src/components/ui/button"
import { Table } from "src/components/ui/table"
import { useWriteOffProductsColumns } from "../hooks/use-write-off-products-columns"

const WriteOffProductsTable: FC = () => {
	const columns = useWriteOffProductsColumns()
	return (
		<>
			<Table
				title={"Списания товаров"}
				extra={<Button icon={<PlusOutlined />}>Добавить</Button>}
				columns={columns}
			/>
		</>
	)
}

export { WriteOffProductsTable }
