import { ColumnsType } from "antd/es/table"

export const useSuppliersColumns = () => {
	const columns: ColumnsType = [
		{
			title: "Название",
			dataIndex: "name",
			key: "name"
		}
	]

	return columns
}
