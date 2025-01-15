import { ColumnsType } from "antd/es/table"
import { SalesProduct } from "src/services/sales-products"

export const useDebtorsColumns = () => {
	const columns: ColumnsType<SalesProduct> = [
		{
			title: "Клиент",
			dataIndex: ["client", "full_name"],
			key: "client"
		}
	]

	return columns
}
