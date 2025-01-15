import { PlusOutlined } from "@ant-design/icons"
import type { FC } from "react"
import { Button } from "src/components/ui/button"
import { Table } from "src/components/ui/table"
import { useSuppliersColumns } from "../hooks/use-suppliers-columns"

const SuppliersStable: FC = () => {
	const columns = useSuppliersColumns()
	return (
		<>
			<Table
				title={"Поставщики"}
				extra={<Button icon={<PlusOutlined />}>Добавить</Button>}
				columns={columns}
			/>
		</>
	)
}

export { SuppliersStable }
