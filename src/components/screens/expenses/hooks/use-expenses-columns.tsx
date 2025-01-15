import { ColumnsType } from "antd/es/table"
import { Expense } from "src/services/expenses"

export const useExpensesColumns = () => {
	const columns: ColumnsType<Expense> = [
		{
			title: "Название",
			dataIndex: "name",
			key: "name"
		}
	]
	return columns
}
