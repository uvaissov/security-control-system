import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockPasses } from '@/data/mockData';
import { FileDown, Eye, CheckCircle, XCircle } from 'lucide-react';

export default function Passes() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Управление пропусками</h1>
          <p className="text-muted-foreground mt-1">Выдача и контроль пропусков</p>
        </div>
        <Button><FileDown className="mr-2 h-4 w-4" />Экспорт</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Список пропусков ({mockPasses.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Владелец</TableHead>
                <TableHead>Тип пропуска</TableHead>
                <TableHead>Уровень доступа</TableHead>
                <TableHead>Срок действия</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPasses.map((pass) => (
                <TableRow key={pass.id}>
                  <TableCell className="font-medium">
                    {pass.employee?.fullName || pass.visitor?.fullName || pass.vehicle?.plateNumber || 'N/A'}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {pass.type === 'permanent' ? 'Постоянный' : pass.type === 'temporary' ? 'Временный' : 'Разовый'}
                    </Badge>
                  </TableCell>
                  <TableCell>{pass.accessLevel}</TableCell>
                  <TableCell className="text-sm">
                    {new Date(pass.validFrom).toLocaleDateString('ru-RU')} - {new Date(pass.validUntil).toLocaleDateString('ru-RU')}
                  </TableCell>
                  <TableCell>
                    {pass.isActive ? (
                      <Badge variant="default" className="gap-1">
                        <CheckCircle className="h-3 w-3" />
                        Активен
                      </Badge>
                    ) : (
                      <Badge variant="destructive" className="gap-1">
                        <XCircle className="h-3 w-3" />
                        Неактивен
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Постоянные</p>
            <p className="text-2xl font-bold">{mockPasses.filter(p => p.type === 'permanent').length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Временные</p>
            <p className="text-2xl font-bold">{mockPasses.filter(p => p.type === 'temporary').length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Разовые</p>
            <p className="text-2xl font-bold">{mockPasses.filter(p => p.type === 'single').length}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
