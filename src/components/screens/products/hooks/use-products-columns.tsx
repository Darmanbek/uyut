import type { ColumnsType } from "antd/es/table"
import type { Product } from "src/services/products"
import { formatEmpty, formatPrice } from "src/utils/formatter.utils"

export const useProductsColumns = () => {
	const columns: ColumnsType<Product> = [
		{
			title: "Название",
			dataIndex: "name",
			key: "name",
			render: formatEmpty
		},
		{
			title: "Размер",
			key: "size",
			children: [
				{
					title: "Длина",
					dataIndex: "length",
					key: "length",
					render: formatEmpty
				},
				{
					title: "Ширина",
					dataIndex: "width",
					key: "width",
					render: formatEmpty
				},
				{
					title: "Площадь",
					dataIndex: "meter_square",
					key: "meter_square",
					render: formatEmpty
				}
			]
		},
		{
			title: "Цена",
			key: "price",
			children: [
				{
					title: "UZS",
					dataIndex: "price_uzs",
					key: "price_uzs",
					render: formatPrice
				},
				{
					title: "USD",
					dataIndex: "price_usd",
					key: "price_usd",
					render: formatPrice
				}
			]
		}
	]

	return columns
}
