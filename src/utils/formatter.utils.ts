export const formatPhone = (phone?: string) => {
	return phone
		? phone.replace(/(\+\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5")
		: "-"
}

export const formatPhoneReverse = (phone?: string) => {
	return phone ? phone.replace(/ /g, "") : "-"
}

export const formatEmpty = <T>(value?: T) => value ?? "-"

export const formatPrice = <T>(value?: T) => {
	if (value === undefined || isNaN(Number(value))) {
		return "0"
	}
	return Intl.NumberFormat("ru-RU", {}).format(Number(value))
}
