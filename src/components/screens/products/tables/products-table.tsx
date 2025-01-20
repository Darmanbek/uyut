import { PlusOutlined } from "@ant-design/icons"
import { FC } from "react"
import { Button } from "src/components/ui/button"
import { Table } from "src/components/ui/table"
import { type Product, useGetProductsQuery } from "src/services/products"
import { useFormDevtoolsStore } from "src/store/use-form-devtools-store"
import { useProductsColumns } from "../hooks/use-products-columns"

interface ProductsTableProps {
	readonly?: boolean
}

const ProductsTable: FC<ProductsTableProps> = ({ readonly }) => {
	const {
		data: products,
		isLoading,
		isFetching
	} = useGetProductsQuery({
		page: 1,
		limit: 10
	})

	const toggleForm = useFormDevtoolsStore((state) => state.toggleForm)

	const columns = useProductsColumns()
	return (
		<>
			<Table<Product>
				rowKey={(record) => record.id}
				title={"Товары"}
				extra={
					readonly ? null : (
						<Button icon={<PlusOutlined />} onClick={toggleForm}>
							Добавить
						</Button>
					)
				}
				loading={isLoading || isFetching}
				columns={columns}
				dataSource={products?.data}
				pagination={{
					total: products?.pagination.count
				}}
			/>
		</>
	)
}

export { ProductsTable }
