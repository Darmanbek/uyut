import { DeleteFilled, EditFilled } from "@ant-design/icons"
import { Space } from "antd"
import { ColumnsType } from "antd/es/table"
import { Button } from "src/components/ui/button"
import { Supplier } from "src/services/suppliers"
import { formatEmpty } from "src/utils/formatter.utils"

export const useSuppliersColumns = () => {
	const columns: ColumnsType<Supplier> = [
		{
			title: "Название",
			dataIndex: "name",
			key: "name",
			render: formatEmpty
		},
		{
			fixed: "right",
			width: 100,
			title: "",
			key: "actions",
			render: () => (
				<Space>
					<Button tooltip={"Изменить"} icon={<EditFilled />} />
					<Button tooltip={"Удалить"} danger={true} icon={<DeleteFilled />} />
				</Space>
			)
		}
	]

	return columns
}
