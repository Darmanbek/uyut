import { PlusOutlined } from "@ant-design/icons"
import type { FC } from "react"
import { Button } from "src/components/ui/button"
import { Table } from "src/components/ui/table"
import {
	useGetWriteOffProductsQuery,
	type WriteOffProduct
} from "src/services/write-off-products"
import { useWriteOffProductsColumns } from "../hooks/use-write-off-products-columns"

const WriteOffProductsTable: FC = () => {
	const {
		data: writeOffProducts,
		isLoading,
		isFetching
	} = useGetWriteOffProductsQuery({
		page: 1,
		limit: 10
	})

	const columns = useWriteOffProductsColumns()
	return (
		<>
			<Table<WriteOffProduct>
				title={"Списания товаров"}
				extra={<Button icon={<PlusOutlined />}>Добавить</Button>}
				columns={columns}
				loading={isLoading || isFetching}
				dataSource={writeOffProducts?.data}
				pagination={{
					total: writeOffProducts?.pagination?.count
				}}
			/>
		</>
	)
}

export { WriteOffProductsTable }
