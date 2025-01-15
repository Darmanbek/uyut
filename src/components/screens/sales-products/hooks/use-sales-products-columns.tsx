import { ColumnsType } from "antd/es/table"
import { SalesProduct } from "src/services/sales-products"

export const useSalesProductsColumns = () => {
	const columns: ColumnsType<SalesProduct> = [
		{
			title: "Название",
			dataIndex: "name",
			key: "name"
		}
	]

	return columns
}
