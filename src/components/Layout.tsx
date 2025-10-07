import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Truck,
  Building2,
  Package,
  CreditCard,
  ClipboardList,
  ScrollText,
  Menu,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Сотрудники', href: '/employees', icon: Users },
  { name: 'Автотранспорт', href: '/vehicles', icon: Truck },
  { name: 'Организации', href: '/companies', icon: Building2 },
  { name: 'Основные средства', href: '/assets', icon: Package },
  { name: 'Пропуска', href: '/passes', icon: CreditCard },
  { name: 'Расследования', href: '/investigations', icon: ClipboardList },
  { name: 'Журнал событий', href: '/event-logs', icon: ScrollText },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-background border-b">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Система Контроля Безопасности</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md hover:bg-accent"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-30 w-64 transform bg-card border-r transition-transform duration-300 ease-in-out lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full',
          'lg:block'
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center border-b px-6">
            <h1 className="text-lg font-semibold hidden lg:block">
              Система Контроля Безопасности
            </h1>
          </div>
          <nav className="flex-1 space-y-1 p-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="border-t p-4">
            <div className="text-xs text-muted-foreground">
              <p>Пользователь: Петрова М.С.</p>
              <p>Роль: Начальник СБ</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="lg:pl-64 pt-16 lg:pt-0">
        <div className="p-4 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
