import Cookies from "js-cookie"
import { EnumToken } from "src/constants/storage.constants"

export const getToken = () => {
	return Cookies.get(EnumToken.TOKEN) || ""
}


export const saveToken = (token: string, remember?: boolean) => {
	Cookies.set(EnumToken.TOKEN, token, {
		sameSite: "strict",
		expires: remember ? 30 : 7,
		secure: true
	})
}


export const removeToken = () => {
	Cookies.remove(EnumToken.TOKEN)
}
