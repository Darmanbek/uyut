import { PlusOutlined } from "@ant-design/icons"
import { FC } from "react"
import { Button } from "src/components/ui/button"
import { Table } from "src/components/ui/table"
import { type Product, useGetProductsQuery } from "src/services/products"
import { useProductsColumns } from "../hooks/use-products-columns"

const ProductsTable: FC = () => {
	const { data: products, isLoading, isFetching } = useGetProductsQuery({})

	const columns = useProductsColumns()
	return (
		<>
			<Table<Product>
				title={"Товары"}
				extra={
					<Button type={"primary"} icon={<PlusOutlined />}>
						Добавить
					</Button>
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
