import { PlusOutlined } from "@ant-design/icons"
import { FC } from "react"
import { Button } from "src/components/ui/button"
import { Table } from "src/components/ui/table"
import { useProductsColumns } from "../hooks/use-products-columns"

const ProductsTable: FC = () => {
	const columns = useProductsColumns()

	return (
		<>
			<Table
				title={"Товары"}
				extra={
					<Button type={"primary"} icon={<PlusOutlined />}>
						Добавить
					</Button>
				}
				columns={columns}
			/>
		</>
	)
}

export { ProductsTable }
