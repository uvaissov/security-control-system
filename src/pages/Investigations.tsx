import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockInvestigations } from '@/data/mockData';
import { FileDown, Eye, AlertCircle, Clock, CheckCircle2 } from 'lucide-react';

const statusIcons = {
  open: AlertCircle,
  in_progress: Clock,
  closed: CheckCircle2,
};

const statusLabels = {
  open: 'Открыто',
  in_progress: 'В работе',
  closed: 'Закрыто',
};

export default function Investigations() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Расследования</h1>
          <p className="text-muted-foreground mt-1">Ведение и хранение материалов расследований</p>
        </div>
        <Button><FileDown className="mr-2 h-4 w-4" />Экспорт</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Список расследований ({mockInvestigations.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Название</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Связанные лица</TableHead>
                <TableHead>Документы</TableHead>
                <TableHead>Обновлено</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockInvestigations.map((inv) => {
                const StatusIcon = statusIcons[inv.status];
                return (
                  <TableRow key={inv.id}>
                    <TableCell className="font-medium max-w-xs">
                      <div className="truncate">{inv.title}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={inv.status === 'closed' ? 'secondary' : inv.status === 'in_progress' ? 'default' : 'outline'} className="gap-1">
                        <StatusIcon className="h-3 w-3" />
                        {statusLabels[inv.status]}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{inv.relatedPersons.length} чел.</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{inv.documents.length} док.</Badge>
                    </TableCell>
                    <TableCell className="text-sm">
                      {new Date(inv.updatedAt).toLocaleDateString('ru-RU')}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-8 w-8 text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">Открыто</p>
                <p className="text-2xl font-bold">{mockInvestigations.filter(i => i.status === 'open').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">В работе</p>
                <p className="text-2xl font-bold">{mockInvestigations.filter(i => i.status === 'in_progress').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Закрыто</p>
                <p className="text-2xl font-bold">{mockInvestigations.filter(i => i.status === 'closed').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
