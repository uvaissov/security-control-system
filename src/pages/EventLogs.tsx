import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockEventLogs } from '@/data/mockData';
import { FileDown, Eye, FileEdit, Trash2 } from 'lucide-react';

const actionIcons = {
  'Просмотр': Eye,
  'Редактирование': FileEdit,
  'Создание': FileEdit,
  'Архивирование': Trash2,
};

export default function EventLogs() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Журнал событий</h1>
          <p className="text-muted-foreground mt-1">Аудит действий в системе</p>
        </div>
        <Button><FileDown className="mr-2 h-4 w-4" />Экспорт</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>История действий ({mockEventLogs.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Действие</TableHead>
                <TableHead>Пользователь</TableHead>
                <TableHead>Модуль</TableHead>
                <TableHead>Детали</TableHead>
                <TableHead>Дата и время</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockEventLogs.map((log) => {
                const ActionIcon = actionIcons[log.action as keyof typeof actionIcons] || Eye;
                return (
                  <TableRow key={log.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <ActionIcon className="h-4 w-4 text-muted-foreground" />
                        {log.action}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{log.user}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{log.module}</Badge>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <div className="truncate text-sm text-muted-foreground">{log.details}</div>
                    </TableCell>
                    <TableCell className="text-sm">
                      {new Date(log.timestamp).toLocaleString('ru-RU')}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Просмотры</p>
                <p className="text-xl font-bold">{mockEventLogs.filter(l => l.action === 'Просмотр').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <FileEdit className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Редактирования</p>
                <p className="text-xl font-bold">{mockEventLogs.filter(l => l.action === 'Редактирование').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <FileEdit className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Создания</p>
                <p className="text-xl font-bold">{mockEventLogs.filter(l => l.action === 'Создание').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Trash2 className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-sm text-muted-foreground">Архивирования</p>
                <p className="text-xl font-bold">{mockEventLogs.filter(l => l.action === 'Архивирование').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
