import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockCompanies } from '@/data/mockData';
import { FileDown, Eye } from 'lucide-react';

export default function Companies() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Учет организаций</h1>
          <p className="text-muted-foreground mt-1">Управление подрядчиками и субподрядчиками</p>
        </div>
        <Button><FileDown className="mr-2 h-4 w-4" />Экспорт</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Список организаций ({mockCompanies.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Название</TableHead>
                <TableHead>БИН</TableHead>
                <TableHead>Тип</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCompanies.map((company) => (
                <TableRow key={company.id}>
                  <TableCell className="font-medium">{company.name}</TableCell>
                  <TableCell>{company.bin}</TableCell>
                  <TableCell>
                    <Badge variant={company.type === 'contractor' ? 'default' : 'secondary'}>
                      {company.type === 'contractor' ? 'Подрядчик' : 'Субподрядчик'}
                    </Badge>
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
    </div>
  );
}
