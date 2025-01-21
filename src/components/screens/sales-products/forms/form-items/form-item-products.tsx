import { Form, Select } from "antd"
import { type FC, useState } from "react"
import { SELECT_PLACEHOLDER } from "src/constants/form.constants"
import { useGetProductsQuery } from "src/services/products"
import type { SalesProductForm } from "src/services/sales-products"

const FormItemProducts: FC = () => {
	const [params] = useState({
		page: 1,
		limit: 10
	})

	const { data: products, isLoading, isFetching } = useGetProductsQuery(params)

	return (
		<Form.Item<SalesProductForm>
			name={"product_id"}
			label={"Товар"}
			rules={[{ required: true }]}>
			<Select
				placeholder={SELECT_PLACEHOLDER}
				loading={isLoading || isFetching}
				options={products?.data?.map((product) => ({
					value: product.id,
					label: product.name
				}))}
			/>
		</Form.Item>
	)
}

export { FormItemProducts }
