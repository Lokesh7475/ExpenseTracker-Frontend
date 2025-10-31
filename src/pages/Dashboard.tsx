import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { IndianRupee } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "../components/ui/chart"
import { Bar, BarChart, CartesianGrid, LabelList, Pie, PieChart, XAxis } from "recharts"

function Dashboard() {
  
    const chartData1 = [
        { month: "January", expense:85000 },
        { month: "February", expense:60000 },
        { month: "March", expense:45000 },
        { month: "April", expense:55000 },
        { month: "May", expense:56000 },
        { month: "June", expense:59800 },
        { month: "July", expense:75800 },
    ]

    const expenseByCategory = [
        { category: "Groceries", expense: 18500, fill:"var(--color-groceries)" },
        { category: "Leisure", expense: 8200, fill:"var(--color-leisure)" },
        { category: "Electronics", expense: 12500, fill:"var(--color-electronics)" },
        { category: "Utilities", expense: 7200, fill:"var(--color-utilities)" },
        { category: "Clothing", expense: 5400, fill:"var(--color-clothing)" },
        { category: "Health", expense: 6300, fill:"var(--color-health)" },
        { category: "Others", expense: 2900, fill:"var(--color-others)" },
    ]

    const chartConfig = {
        expense: {
            label: "Expense",
            color: "#2563eb",
        },
    } satisfies ChartConfig

    const pieChartConfig = {
        expense: {
            label: "Expense",
        },
        groceries: {
            label: "Groceries",
            color: "var(--chart-1)",
        },
        leisure: {
            label: "Leisure",
            color: "var(--chart-2)",
        },
        electronics: {
            label: "Electronics",
            color: "var(--chart-3)",
        },
        utilities: {
            label: "Utilities",
            color: "var(--chart-4)",
        },
        clothing: {
            label: "Clothing",
            color: "var(--chart-5)",
        },
        health: {
            label: "Health",
            color: "var(--chart-5)",
        },
        others: {
            label: "Others",
            color: "var(--chart-5)",
        },
    } satisfies ChartConfig


    return (
        <div className="p-6 space-y-8">
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
            <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Total Expense
                        </CardTitle>
                        <CardDescription>
                            Total expense of current month  
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-row gap-1 items-center text-lg">
                        <IndianRupee/>
                        5000
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Total Expense
                        </CardTitle>
                        <CardDescription>
                            Total expense of current month  
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-row gap-1 items-center text-lg">
                        <IndianRupee/>
                        60000
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Total Expense
                        </CardTitle>
                        <CardDescription>
                            Total expense of the past months
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-row gap-1 items-center text-lg">
                        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                            <BarChart data={chartData1}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Total Expense
                        </CardTitle>
                        <CardDescription>
                            Total expense of the past months
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-row gap-1 items-center text-lg">
                        <ChartContainer config={pieChartConfig} className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[300px] w-full">
                            <PieChart>
                                <ChartTooltip
                                content={<ChartTooltipContent nameKey="expense" hideLabel />}
                                />
                                <Pie data={expenseByCategory} dataKey="expense">
                                <LabelList
                                    dataKey="category"
                                    className="fill-background"
                                    stroke="none"
                                    fontSize={10}
                                    formatter={(value: keyof typeof chartConfig) =>
                                    pieChartConfig[value]?.label ?? value
                                    }
                                />
                                </Pie>
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Dashboard
