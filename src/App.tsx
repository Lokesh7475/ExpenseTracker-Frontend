import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import AppSidebar from './components/appsidebar'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import DashBoard from './pages/dashboard'
import ExpensesPage from './pages/Expenses'
import AddExpensePage from './pages/AddExpense'
import ProfilePage from './pages/Profile'
import SettingsPage from './pages/Settings'
import Home from './pages/Home'

function App() {
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  return (
    <>
      <SidebarProvider>
        <div className="flex h-screen w-screen overflow-hidden">
          {!isHomePage && <AppSidebar />}

          {/* Content wrapper */}
          <div className="flex flex-1 flex-col">
            {!isHomePage && <header className="p-2 border-b">
               <SidebarTrigger />
            </header>
            }
          
            <main className={`flex-1 overflow-auto bg-muted/10 ${isHomePage ? "w-full" : ""}`}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/expenses" element={<ExpensesPage />} />
                <Route path="/add-expense" element={<AddExpensePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </>
  )
}

export default App
