import { EyeFilled } from "@ant-design/icons"
import { useLocation, useRouter } from "@tanstack/react-router"
import { Space } from "antd"
import type { ColumnsType } from "antd/es/table"
import { Button } from "src/components/ui/button"
import type { Product } from "src/services/products"
import { formatDate, formatEmpty, formatPrice } from "src/utils/formatter.utils"

export const useProductsColumns = () => {
	const { history } = useRouter()
	const { pathname } = useLocation()

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
		},
		{
			title: "Поставщик",
			dataIndex: ["supplier", "name"],
			key: "supplier",
			render: formatEmpty
		},
		{
			title: "Остаток площади",
			dataIndex: "remainder_square_meter",
			key: "remainder_square_meter",
			render: formatEmpty
		},
		{
			title: "Создан",
			dataIndex: "created_at",
			key: "created_at",
			render: formatDate
		},
		{
			fixed: "right",
			width: 50,
			title: "",
			key: "actions",
			render: (_v, record) => (
				<Space>
					<Button
						onClick={() => history.push(`${pathname}/${record.id}`)}
						tooltip={"Открыть"}
						icon={<EyeFilled />}
					/>
				</Space>
			)
		}
	]

	return columns
}
