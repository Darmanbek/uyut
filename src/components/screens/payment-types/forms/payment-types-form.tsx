import { Form, FormProps, Input } from "antd"
import { type FC, useEffect } from "react"
import { FormDrawer } from "src/components/shared/form-drawer"
import { FORM_DEFAULT, INPUT_PLACEHOLDER } from "src/constants/form.constants"
import {
	type PaymentTypeForm,
	useCreatePaymentTypesMutation
} from "src/services/shared/payment-types"
import { useFormDevtoolsStore } from "src/store/use-form-devtools-store"

const PaymentTypesForm: FC = () => {
	const [form] = Form.useForm<PaymentTypeForm>()

	const { params, resetParams } = useFormDevtoolsStore()

	const { mutate: addPrintType, isPending: addLoading } =
		useCreatePaymentTypesMutation()

	const onFinish: FormProps<PaymentTypeForm>["onFinish"] = async (values) => {
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
			<Form {...FORM_DEFAULT} name={"payment-type-form"} form={form} onFinish={onFinish}>
				<Form.Item<PaymentTypeForm>
					name={"name"}
					label={"Название"}
					rules={[{ required: true }]}>
					<Input placeholder={INPUT_PLACEHOLDER} />
				</Form.Item>
			</Form>
		</FormDrawer>
	)
}

export { PaymentTypesForm }
