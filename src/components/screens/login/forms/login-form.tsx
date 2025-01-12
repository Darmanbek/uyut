import { Button, Card, Checkbox, Flex, Form, FormProps, Input, Typography } from "antd"
import { type  FC } from "react"
import { InputMask } from "src/components/ui/input-mask"
import { FORM_DEFAULT, INPUT_PLACEHOLDER } from "src/constants/form.constants"

const LoginForm: FC = () => {
	const [form] = Form.useForm()
	
	const onFinish: FormProps["onFinish"] = (values) => {
		console.log(values)
	}
	
	return (
		<Flex vertical={true} align={"center"} style={{ padding: 24 }}>
			<Card
				bordered={false}
				style={{
					width: "100%",
					maxWidth: 600
				}}
				styles={{
					body: {
						padding: "48px 60px"
					}
				}}
			>
				<Typography.Title style={{ textAlign: "center" }}>Логин</Typography.Title>
				<Form
					{...FORM_DEFAULT}
					form={form}
					onFinish={onFinish}
					size={"large"}
					style={{
						marginTop: 40
					}}
				>
					<Form.Item
						label={"Телефон номер"}
						name={"phone"}
						rules={[
							{ required: true }
						]}
					>
						<InputMask mask={"+\\9\\98 99 999 99 99"} placeholder={INPUT_PLACEHOLDER} />
					</Form.Item>
					<Form.Item
						label={"Пароль"}
						name={"password"}
						rules={[
							{ required: true }
						]}
					>
						<Input.Password placeholder={INPUT_PLACEHOLDER} />
					</Form.Item>
					<Form.Item
						// noStyle={true}
						name={"remember"}
						valuePropName={"checked"}
						initialValue={false}
					>
						<Checkbox>
							Запомнить меня
						</Checkbox>
					</Form.Item>
					<Form.Item>
						<Button type={"primary"} htmlType={"submit"} block={true}>Войти</Button>
					</Form.Item>
				</Form>
			</Card>
		</Flex>
	)
}

export { LoginForm }
