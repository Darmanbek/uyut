import { Form, FormProps, Input } from "antd"
import { type FC, useEffect } from "react"
import { FormDrawer } from "src/components/shared/form-drawer"
import { FORM_DEFAULT, INPUT_PLACEHOLDER } from "src/constants/form.constants"
import {
	PrintTypeForm,
	useCreatePrintTypesMutation
} from "src/services/shared/print-types"
import { useFormDevtoolsStore } from "src/store/use-form-devtools-store"

const PrintTypesForm: FC = () => {
	const [form] = Form.useForm<PrintTypeForm>()

	const { params, resetParams } = useFormDevtoolsStore()

	const { mutate: addPrintType, isPending: addLoading } =
		useCreatePrintTypesMutation()

	const onFinish: FormProps<PrintTypeForm>["onFinish"] = async (values) => {
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
			<Form {...FORM_DEFAULT} form={form} onFinish={onFinish}>
				<Form.Item<PrintTypeForm>
					name={"name"}
					label={"Название"}
					rules={[{ required: true }]}>
					<Input placeholder={INPUT_PLACEHOLDER} />
				</Form.Item>
			</Form>
		</FormDrawer>
	)
}

export { PrintTypesForm }
