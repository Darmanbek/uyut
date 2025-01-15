import type { ColumnsType } from "antd/es/table"
import type { Product } from "src/services/products"

export const useProductsColumns = () => {
	const columns: ColumnsType<Product> = [
		{
			title: "Название",
			dataIndex: "name",
			key: "name"
		}
	]

	return columns
}
