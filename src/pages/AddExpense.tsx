import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

// TypeScript category/payment values
export const categories = [
  "GROCERIES",
  "LEISURE",
  "ELECTRONICS",
  "UTILITIES",
  "CLOTHING",
  "FOOD",
  "HEALTH",
  "OTHERS",
] as const

export const paymentMethods = [
  "CASH",
  "CREDIT_CARD",
  "DEBIT_CARD",
  "UPI",
  "NET_BANKING",
  "OTHER",
] as const

// Zod schema
const expenseSchema = z.object({
  description: z.string().min(3, "Description must be at least 3 characters"),
  category: z.enum(categories, { errorMap: () => ({ message: "Category required" }) }),
  paymentMethod: z.enum(paymentMethods, { errorMap: () => ({ message: "Payment method required" }) }),
  amount: z.number({ invalid_type_error: "Amount must be a number" })
    .min(0.01, "Enter a valid amount"),
  transaction_date: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date (YYYY-MM-DD format)")
})

type ExpenseFormValues = z.infer<typeof expenseSchema>

const defaultValues: ExpenseFormValues = {
  description: "",
  category: "OTHERS",
  paymentMethod: "CASH",
  amount: 0,
  transaction_date: "",
}
function AddExpensePage() {
  const form = useForm<ExpenseFormValues>({
    resolver: zodResolver(expenseSchema),
    defaultValues
  })

  const onSubmit: SubmitHandler<ExpenseFormValues> = (values) => {
    console.log(values)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-2">
      <div
        className="bg-card border border-border rounded-xl shadow-lg p-6 w-full max-w-md"
        style={{ minWidth: 0 }}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      placeholder="Short description"
                      className="w-full px-3 py-2 rounded-md outline-2 focus:ring-1 focus:ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full rounded-md outline-2 focus:ring-1 focus:ring-primary transition">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat.replace("_", " ")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Method</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full rounded-md outline-2 focus:ring-1 focus:ring-primary transition">
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        {paymentMethods.map((method) => (
                          <SelectItem key={method} value={method}>
                            {method.replace("_", " ")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <input
                      type="number"
                      step="10.00"
                      className="w-full px-3 py-2 rounded-md outline-2 focus:ring-1 focus:ring-primary transition"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value))}
            value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="transaction_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <input
                      type="date"
                      className="w-full px-3 py-2 rounded-md outline-2 focus:ring-1 focus:ring-primary transition"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" variant="outline" className="w-full py-3 mt-2">
              Add Expense
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default AddExpensePage;