import type { ColumnsType } from "antd/es/table"
import type { User } from "src/services/users"

export const useUsersColumns = () => {
	const columns: ColumnsType<User> = [
		{
			title: "ФИО",
			dataIndex: "name",
			key: "name"
		}
	]
	return columns
}
