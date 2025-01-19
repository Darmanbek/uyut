import { PlusOutlined } from "@ant-design/icons"
import type { FC } from "react"
import { Button } from "src/components/ui/button"
import { Table } from "src/components/ui/table"
import { type Supplier, useGetSuppliersQuery } from "src/services/suppliers"
import { useSuppliersColumns } from "../hooks/use-suppliers-columns"

const SuppliersStable: FC = () => {
	const {
		data: suppliers,
		isLoading,
		isFetching
	} = useGetSuppliersQuery({
		page: 1,
		limit: 10
	})

	const columns = useSuppliersColumns()
	return (
		<>
			<Table<Supplier>
				rowKey={(record) => record.id}
				title={"Поставщики"}
				extra={<Button icon={<PlusOutlined />}>Добавить</Button>}
				columns={columns}
				loading={isLoading || isFetching}
				dataSource={suppliers?.data}
				pagination={{
					total: suppliers?.pagination?.count
				}}
			/>
		</>
	)
}

export { SuppliersStable }
