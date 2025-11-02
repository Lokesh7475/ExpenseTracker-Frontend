import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { IndianRupee } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

interface Expense {
  id: number;
  userId: number;
  description: string;
  category: string;
  paymentMethod: string;
  amount: string;
  dateAndTime: string;
}

const DUMMY_EXPENSES: Expense[] = Array.from({ length: 42 }).map((_, i) => ({
  id: i + 1,
  userId: 1000 + i,
  description: `Expense description ${i + 1}`,
  category: ["Food", "Travel", "Shopping", "Utilities"][i % 4],
  paymentMethod: ["Cash", "Card", "UPI"][i % 3],
  amount: (Math.random() * 10000).toFixed(2),
  dateAndTime: new Date(Date.now() - i * 86400000).toISOString(),
}));

const ITEMS_PER_PAGE = 5;

const ExpensesPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentItems, setCurrentItems] = useState<Expense[]>([]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const start = (page - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      setCurrentItems(DUMMY_EXPENSES.slice(start, end));
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [page]);

  const totalPages = Math.ceil(DUMMY_EXPENSES.length / ITEMS_PER_PAGE);

  return (
    <div className="p-6 space-y-8">
      {loading
        ? Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
            <Card key={i}>
              <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Skeleton className="sm:max-w-sm h-6 rounded" />
                <Skeleton className="w-20 h-6 rounded" />
                <Skeleton className="w-28 h-6 rounded mt-1" />
                <div className="flex flex-col items-end gap-1">
                  <Skeleton className="h-6 w-20 rounded" />
                  <Skeleton className="h-4 w-24 rounded" />
                </div>
              </CardContent>
            </Card>
          ))
        : currentItems.map((expense) => (
            <Card key={expense.id}>
              <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col flex-1 min-w-0 sm:max-w-2xs">
                    <p className="break-words font-medium">{expense.description}</p>
                    <div className="flex items-center text-sm opacity-55">
                        {expense.paymentMethod}
                    </div>
                </div>
                <Badge>{expense.category}</Badge>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1">
                    <IndianRupee className="h-4" />
                    <p className="text-lg">{expense.amount}</p>
                  </div>
                  <div className="text-sm opacity-80">
                    {new Date(expense.dateAndTime).toDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

      <Pagination
        total={DUMMY_EXPENSES.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={page}
        onPageChange={(p: number) => setPage(p)}
      >
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <PaginationItem key={idx}>
              <button
                className={`px-3 py-1 rounded ${
                  page === idx + 1
                    ? "bg-white text-black"
                    : "hover:bg-gray-500 hover:text-black"
                }`}
                onClick={() => setPage(idx + 1)}
              >
                {idx + 1}
              </button>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ExpensesPage;
