export const formatPhone = (phone?: string) => {
	return phone
		? phone.replace(/(\+\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5")
		: "-"
}

export const formatPhoneReverse = (phone?: string) => {
	return phone
		? phone.replace(/ /g, "")
		: "-"
}
