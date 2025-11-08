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
            color: "#ffffff",           // white
        },
        groceries: {
            label: "Groceries",
            color: "#b0b0b0",           // light grey
        },
        leisure: {
            label: "Leisure",
            color: "#a0a0a0",           // medium grey
        },
        electronics: {
            label: "Electronics",
            color: "#909090",           // grey
        },
        utilities: {
            label: "Utilities",
            color: "#808080",           // dark grey
        },
        clothing: {
            label: "Clothing",
            color: "#707070",           // darker grey
        },
        health: {
            label: "Health",
            color: "#606060",           // even darker grey
        },
        others: {
            label: "Others",
            color: "#505050",           // near black grey
        },
    } satisfies ChartConfig;


    return (
        <div className="min-h-screen w-full bg-background px-4 py-8 md:px-8 lg:px-12" >
            <div className="max-w-6xl mx-auto space-y-10">
            <header className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-4">
                <div className="text-center sm:text-left">
                    <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
                    <p className="text-sm text-muted-foreground mt-1">
                        Overview of your recent expenses and spending patterns.
                    </p>
                </div>
            </header>

            <div className="justify-center grid gap-4 sm:grid-cols-2">
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
                                <Bar dataKey="expense" fill="#FFF" radius={4} />
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
        </div>
    )
}

export default Dashboard
