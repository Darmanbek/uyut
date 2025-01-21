import { Form, FormProps, Input } from "antd"
import { type FC, useEffect } from "react"
import { FormDrawer } from "src/components/shared/form-drawer"
import { FORM_DEFAULT, INPUT_PLACEHOLDER } from "src/constants/form.constants"
import {
	type ExpenseTypeForm,
	useCreateExpenseTypesMutation
} from "src/services/shared/expense-types"
import { useFormDevtoolsStore } from "src/store/use-form-devtools-store"

const ExpenseTypesForm: FC = () => {
	const [form] = Form.useForm<ExpenseTypeForm>()

	const { params, resetParams } = useFormDevtoolsStore()

	const { mutate: addPrintType, isPending: addLoading } =
		useCreateExpenseTypesMutation()

	const onFinish: FormProps<ExpenseTypeForm>["onFinish"] = async (values) => {
		addPrintType(values, {
			onSuccess: () => {
				resetParams()
				form.resetFields()
			}
		})
	}

	useEffect(() => {
		if (params) {
			form.setFieldsValue({
				...params
			})
		}
	}, [form, params])
	return (
		<FormDrawer form={form} isLoading={addLoading}>
			<Form {...FORM_DEFAULT} name={"expense-type-form"} form={form} onFinish={onFinish}>
				<Form.Item<ExpenseTypeForm>
					name={"name"}
					label={"Название"}
					rules={[{ required: true }]}>
					<Input placeholder={INPUT_PLACEHOLDER} />
				</Form.Item>
			</Form>
		</FormDrawer>
	)
}

export { ExpenseTypesForm }
