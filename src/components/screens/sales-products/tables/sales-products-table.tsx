import { PlusOutlined } from "@ant-design/icons"
import { FC } from "react"
import { Button } from "src/components/ui/button"
import { Table } from "src/components/ui/table"
import { useSalesProductsColumns } from "../hooks/use-sales-products-columns"

const SalesProductsTable: FC = () => {
	const columns = useSalesProductsColumns()
	return (
		<>
			<Table
				title={"Проданные товары"}
				extra={<Button icon={<PlusOutlined />}>Добавить</Button>}
				columns={columns}
			/>
		</>
	)
}

export { SalesProductsTable }
