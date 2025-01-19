import type { ExpenseType } from "src/services/shared/expense-types"
import type { User } from "src/services/users"

type Expense = {
	id: number
	expense_type: ExpenseType
	title: string
	amount: string
	cashier: User
	created_at: string
}

export type { Expense }
