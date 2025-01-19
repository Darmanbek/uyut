import { PlusOutlined } from "@ant-design/icons"
import type { FC } from "react"
import { Button } from "src/components/ui/button"
import { Table } from "src/components/ui/table"
import { useGetUsersQuery, User } from "src/services/users"
import { useUsersColumns } from "../hooks/use-users-columns"

const UsersTable: FC = () => {
	const {
		data: users,
		isLoading,
		isFetching
	} = useGetUsersQuery({
		page: 1,
		limit: 10
	})

	const columns = useUsersColumns()
	return (
		<>
			<Table<User>
				rowKey={(record) => record.id}
				title={"Сотрудники"}
				extra={<Button icon={<PlusOutlined />}>Добавить</Button>}
				columns={columns}
				loading={isLoading || isFetching}
				dataSource={users?.data}
				pagination={{
					total: users?.pagination?.count
				}}
			/>
		</>
	)
}

export { UsersTable }
