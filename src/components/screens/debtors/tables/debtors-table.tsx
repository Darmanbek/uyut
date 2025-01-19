import type { FC } from "react"
import { Table } from "src/components/ui/table"
import { Debtor, useGetDebtorsQuery } from "src/services/debtors"
import { useDebtorsColumns } from "../hooks/use-debtors-columns"

const DebtorsTable: FC = () => {
	const {
		data: debtors,
		isLoading,
		isFetching
	} = useGetDebtorsQuery({
		page: 1,
		limit: 10
	})

	const columns = useDebtorsColumns()
	return (
		<>
			<Table<Debtor>
				rowKey={(record) => record.id}
				title={"Должники"}
				columns={columns}
				loading={isLoading || isFetching}
				dataSource={debtors?.data}
				pagination={{
					total: debtors?.pagination?.count
				}}
			/>
		</>
	)
}

export { DebtorsTable }
