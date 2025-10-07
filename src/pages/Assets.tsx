import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockAssets } from '@/data/mockData';
import { FileDown, Eye, Package } from 'lucide-react';

export default function Assets() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Основные средства</h1>
          <p className="text-muted-foreground mt-1">Контроль ввоза-вывоза и перемещения ОС</p>
        </div>
        <Button><FileDown className="mr-2 h-4 w-4" />Экспорт</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Список основных средств ({mockAssets.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Наименование</TableHead>
                <TableHead>Количество</TableHead>
                <TableHead>Ответственный</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Документы</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAssets.map((asset) => (
                <TableRow key={asset.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-muted-foreground" />
                      {asset.name}
                    </div>
                  </TableCell>
                  <TableCell>{asset.quantity}</TableCell>
                  <TableCell>{asset.responsible.fullName}</TableCell>
                  <TableCell>
                    <Badge variant={asset.status === 'permanent' ? 'default' : 'secondary'}>
                      {asset.status === 'permanent' ? 'Постоянный' : 'Временный'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{asset.documents.length}</Badge>
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

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Package className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Постоянные</p>
                <p className="text-2xl font-bold">{mockAssets.filter(a => a.status === 'permanent').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Package className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Временные</p>
                <p className="text-2xl font-bold">{mockAssets.filter(a => a.status === 'temporary').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
