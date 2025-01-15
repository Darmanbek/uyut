import { ExpenseType } from "../shared/expense-types"
import { User } from "../users"

export type Expense = {
	id: number
	expense_type: ExpenseType
	title: string
	amount: string
	cashier: User
	created_at: string
}
