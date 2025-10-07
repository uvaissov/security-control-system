import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { dashboardStats } from '@/data/mockData';
import {
  Users,
  Truck,
  CreditCard,
  AlertTriangle,
  Activity,
  TrendingUp,
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Обзор системы контроля безопасности
        </p>
      </div>

      {/* Статистика */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Сотрудники</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.totalEmployees}</div>
            <p className="text-xs text-muted-foreground">
              Активных: {dashboardStats.activeEmployees}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Автотранспорт</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.totalVehicles}</div>
            <p className="text-xs text-muted-foreground">
              Активных: {dashboardStats.activeVehicles}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Пропуска</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.totalPasses}</div>
            <p className="text-xs text-muted-foreground">
              Активных: {dashboardStats.activePasses}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Расследования</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.openInvestigations}</div>
            <p className="text-xs text-muted-foreground">Открытых</p>
          </CardContent>
        </Card>
      </div>

      {/* Движения за сегодня */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Движения за сегодня</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Общее количество перемещений по территории
            </p>
          </div>
          <Activity className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold">{dashboardStats.todayMovements}</div>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              +12%
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Оповещения */}
        <Card>
          <CardHeader>
            <CardTitle>Оповещения</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {dashboardStats.alerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-start gap-3 p-3 rounded-lg border"
              >
                <AlertTriangle
                  className={`h-5 w-5 mt-0.5 ${
                    alert.type === 'error'
                      ? 'text-red-500'
                      : alert.type === 'warning'
                      ? 'text-yellow-500'
                      : 'text-blue-500'
                  }`}
                />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">{alert.message}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(alert.timestamp).toLocaleString('ru-RU')}
                  </p>
                </div>
                <Badge
                  variant={
                    alert.type === 'error'
                      ? 'destructive'
                      : alert.type === 'warning'
                      ? 'outline'
                      : 'secondary'
                  }
                >
                  {alert.type === 'error'
                    ? 'Критично'
                    : alert.type === 'warning'
                    ? 'Важно'
                    : 'Инфо'}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Последняя активность */}
        <Card>
          <CardHeader>
            <CardTitle>Последняя активность</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {dashboardStats.recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 p-3 rounded-lg border"
              >
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  {activity.type === 'entry' && <Users className="h-4 w-4" />}
                  {activity.type === 'vehicle_entry' && <Truck className="h-4 w-4" />}
                  {activity.type === 'pass_issued' && <CreditCard className="h-4 w-4" />}
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">{activity.person || activity.vehicle}</p>
                  <p className="text-xs text-muted-foreground">{activity.location}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(activity.timestamp).toLocaleString('ru-RU')}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
