import { PlusOutlined } from "@ant-design/icons"
import type { FC } from "react"
import { Button } from "src/components/ui/button"
import { Table } from "src/components/ui/table"
import { useUsersColumns } from "../hooks/use-users-columns"

const UsersTable: FC = () => {
	const columns = useUsersColumns()
	return (
		<>
			<Table
				title={"Сотрудники"}
				extra={<Button icon={<PlusOutlined />}>Добавить</Button>}
				columns={columns}
			/>
		</>
	)
}

export { UsersTable }
