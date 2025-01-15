import { ColumnsType } from "antd/es/table"
import { WriteOffProduct } from "src/services/write-off-products"

export const useWriteOffProductsColumns = () => {
	const columns: ColumnsType<WriteOffProduct> = [
		{
			title: "Название",
			dataIndex: "name",
			key: "name"
		}
	]

	return columns
}
