import { PlusOutlined } from "@ant-design/icons"
import type { FC } from "react"
import { Button } from "src/components/ui/button"
import { Table } from "src/components/ui/table"
import { useExpensesColumns } from "../hooks/use-expenses-columns"

const ExpensesTable: FC = () => {
	const columns = useExpensesColumns()
	return (
		<>
			<Table
				title={"Расходы"}
				extra={<Button icon={<PlusOutlined />}>Добавить</Button>}
				columns={columns}
			/>
		</>
	)
}

export { ExpensesTable }
