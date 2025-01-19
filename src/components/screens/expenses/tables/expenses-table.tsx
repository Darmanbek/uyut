import { PlusOutlined } from "@ant-design/icons"
import type { FC } from "react"
import { Button } from "src/components/ui/button"
import { Table } from "src/components/ui/table"
import { type Expense, useGetExpensesQuery } from "src/services/expenses"
import { useExpensesColumns } from "../hooks/use-expenses-columns"

const ExpensesTable: FC = () => {
	const {
		data: expenses,
		isLoading,
		isFetching
	} = useGetExpensesQuery({
		page: 1,
		limit: 10
	})

	const columns = useExpensesColumns()
	return (
		<>
			<Table<Expense>
				rowKey={(record) => record.id}
				title={"Расходы"}
				extra={<Button icon={<PlusOutlined />}>Добавить</Button>}
				columns={columns}
				loading={isLoading || isFetching}
				dataSource={expenses?.data}
				pagination={{
					total: expenses?.pagination?.count
				}}
			/>
		</>
	)
}

export { ExpensesTable }
