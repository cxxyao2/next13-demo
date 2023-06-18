'use server'

import { prisma } from "./db"

export async function toggleTodo(id: string, complete: boolean) {
	// console.log(id, complete)

	await prisma.todo.update({
		where: { id },
		data: { complete }
	})
}
