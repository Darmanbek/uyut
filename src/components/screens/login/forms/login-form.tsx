import { useRouter } from "@tanstack/react-router"
import { Button, Card, Checkbox, Flex, Form, FormProps, Input, Typography } from "antd"
import { type FC, useEffect } from "react"
import { InputMask } from "src/components/ui/input-mask"
import { FORM_DEFAULT, INPUT_PLACEHOLDER } from "src/constants/form.constants"
import { useAuth } from "src/hooks/use-auth"
import { type LoginForm, useLoginMutation } from "src/services/login"
import { formatPhoneReverse } from "src/utils/formatter.utils"

const LoginForm: FC = () => {
	const router = useRouter()
	const [form] = Form.useForm<LoginForm>()
	const auth = useAuth()

	const remember = Form.useWatch("remember", form)

	const { data: loginData, mutate: login, isPending, isSuccess } = useLoginMutation()

	const onFinish: FormProps<LoginForm>["onFinish"] = (values) => {
		if (values.phone) {
			values.phone = formatPhoneReverse(values.phone)
		}
		login(values)
	}

	useEffect(() => {
		if (loginData && isSuccess) {
			auth.login(loginData?.data?.token, remember)
			router.invalidate()
		}
	}, [auth, isSuccess, loginData, remember, router])
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
				}}>
				<Typography.Title style={{ textAlign: "center" }}>Логин</Typography.Title>
				<Form
					{...FORM_DEFAULT}
					form={form}
					onFinish={onFinish}
					size={"large"}
					style={{
						marginTop: 40
					}}>
					<Form.Item<LoginForm> label={"Телефон номер"} name={"phone"} rules={[{ required: true }]}>
						<InputMask mask={"+\\9\\98 99 999 99 99"} placeholder={INPUT_PLACEHOLDER} />
					</Form.Item>
					<Form.Item<LoginForm> label={"Пароль"} name={"password"} rules={[{ required: true }]}>
						<Input.Password placeholder={INPUT_PLACEHOLDER} />
					</Form.Item>
					<Form.Item<LoginForm>
						// noStyle={true}
						name={"remember"}
						valuePropName={"checked"}
						initialValue={false}>
						<Checkbox>Запомнить меня</Checkbox>
					</Form.Item>
					<Form.Item>
						<Button loading={isPending} type={"primary"} htmlType={"submit"} block={true}>
							Войти
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</Flex>
	)
}

export { LoginForm }
