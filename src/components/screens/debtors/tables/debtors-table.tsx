import type { FC } from "react"
import { Table } from "src/components/ui/table"
import { useDebtorsColumns } from "../hooks/use-debtors-columns"

const DebtorsTable: FC = () => {
	const columns = useDebtorsColumns()
	return (
		<div>
			<Table 
				title={"Должники"}
				columns={columns}
			/>
		</div>
	)
}

export { DebtorsTable }
