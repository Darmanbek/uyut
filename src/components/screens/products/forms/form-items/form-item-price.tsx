import { Col, Form, FormInstance, InputNumber, Row } from "antd"
import { type FC } from "react"
import { INPUT_PLACEHOLDER } from "src/constants/form.constants"
import { useConvertPrice } from "src/hooks/use-convert-price"
import type { ProductForm } from "src/services/products"

interface FormItemPriceProps {
	form: FormInstance<ProductForm>
}

const FormItemPrice: FC<FormItemPriceProps> = ({ form }) => {
	const priceUZS = Form.useWatch("price_uzs", form) || 0
	const priceUSD = Form.useWatch("price_usd", form) || 0

	const convertedPriceUZStoUSD = useConvertPrice(Number(priceUZS), "USD", "UZS")
	const convertedPriceUSDtoUZS = useConvertPrice(Number(priceUSD), "UZS", "USD")

	const onChangePrice = (type: "price_usd" | "price_uzs") => {
		form.setFieldValue(
			type,
			type === "price_usd" ? convertedPriceUZStoUSD : convertedPriceUSDtoUZS
		)
	}

	// useDebounce(
	// 	() => {
	// 		form.setFieldValue("price_usd", convertedPriceUZStoUSD)
	// 	},
	// 	500,
	// 	[priceUZS, convertedPriceUZStoUSD]
	// )
	//
	// useDebounce(
	// 	() => {
	// 		form.setFieldValue("price_uzs", convertedPriceUSDtoUZS)
	// 	},
	// 	500,
	// 	[priceUSD, convertedPriceUSDtoUZS]
	// )

	// console.log("UZS to USD", convertedPriceUZStoUSD)
	// console.log("USD to UZS", convertedPriceUSDtoUZS)

	// useEffect(() => {
	// 	form.setFieldValue("price_usd", convertedPriceUZStoUSD)
	// }, [convertedPriceUZStoUSD, form])
	//
	// useEffect(() => {
	// 	form.setFieldValue("price_uzs", convertedPriceUSDtoUZS)
	// }, [convertedPriceUSDtoUZS, form])
	return (
		<Row gutter={20} style={{ rowGap: 20 }}>
			<Col span={12}>
				<Form.Item<ProductForm>
					name={"price_uzs"}
					label={"UZS"}
					getValueFromEvent={(args) => {
						form.setFieldValue("price_usd", convertedPriceUZStoUSD)
						return args
					}}
					rules={[{ required: true }]}>
					<InputNumber
						onChange={() => onChangePrice("price_usd")}
						style={{ width: "100%" }}
						placeholder={INPUT_PLACEHOLDER}
					/>
				</Form.Item>
			</Col>
			<Col span={12}>
				<Form.Item<ProductForm>
					name={"price_usd"}
					label={"USD"}
					getValueFromEvent={(args) => {
						form.setFieldValue("price_uzs", convertedPriceUSDtoUZS)
						return args
					}}
					rules={[{ required: true }]}>
					<InputNumber
						onChange={() => onChangePrice("price_uzs")}
						style={{ width: "100%" }}
						placeholder={INPUT_PLACEHOLDER}
					/>
				</Form.Item>
			</Col>
		</Row>
	)
}

export { FormItemPrice }
