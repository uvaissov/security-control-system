import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { mockEmployees } from '@/data/mockData';
import { Search, Eye, FileDown } from 'lucide-react';

const statusColors = {
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
};

const statusLabels = {
  green: 'Полный доступ',
  blue: 'Стандартный',
  yellow: 'Ограниченный',
  red: 'Запрещен',
};

export default function Employees() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEmployees = mockEmployees.filter(
    (emp) =>
      emp.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Учет сотрудников</h1>
          <p className="text-muted-foreground mt-1">
            Управление персональными досье сотрудников
          </p>
        </div>
        <Button>
          <FileDown className="mr-2 h-4 w-4" />
          Экспорт
        </Button>
      </div>

      {/* Поиск */}
      <Card>
        <CardHeader>
          <CardTitle>Поиск сотрудника</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск по ФИО, должности, организации..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Таблица сотрудников */}
      <Card>
        <CardHeader>
          <CardTitle>Список сотрудников ({filteredEmployees.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ФИО</TableHead>
                <TableHead>Должность</TableHead>
                <TableHead>Организация</TableHead>
                <TableHead>Контакты</TableHead>
                <TableHead>Статус доступа</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <img
                        src={employee.photo}
                        alt={employee.fullName}
                        className="h-10 w-10 rounded-full"
                      />
                      {employee.fullName}
                    </div>
                  </TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.company}</TableCell>
                  <TableCell>{employee.contactInfo}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-3 w-3 rounded-full ${
                          statusColors[employee.accessStatus]
                        }`}
                      />
                      <span className="text-sm">
                        {statusLabels[employee.accessStatus]}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Статистика по статусам */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <div className="h-6 w-6 rounded-full bg-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Полный доступ</p>
                <p className="text-2xl font-bold">
                  {mockEmployees.filter((e) => e.accessStatus === 'green').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <div className="h-6 w-6 rounded-full bg-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Стандартный</p>
                <p className="text-2xl font-bold">
                  {mockEmployees.filter((e) => e.accessStatus === 'blue').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                <div className="h-6 w-6 rounded-full bg-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Ограниченный</p>
                <p className="text-2xl font-bold">
                  {mockEmployees.filter((e) => e.accessStatus === 'yellow').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <div className="h-6 w-6 rounded-full bg-red-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Запрещен</p>
                <p className="text-2xl font-bold">
                  {mockEmployees.filter((e) => e.accessStatus === 'red').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
