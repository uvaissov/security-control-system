import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
import { mockVehicles } from '@/data/mockData';
import { Search, Eye, FileDown, Car, Truck as TruckIcon, Construction } from 'lucide-react';

const vehicleIcons = {
  car: Car,
  truck: TruckIcon,
  crane: Construction,
  other: Car,
};

const vehicleTypeLabels = {
  car: 'Легковой',
  truck: 'Грузовой',
  crane: 'Спецтехника',
  other: 'Другое',
};

export default function Vehicles() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVehicles = mockVehicles.filter(
    (vehicle) =>
      vehicle.plateNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.driver.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Учет автотранспорта</h1>
          <p className="text-muted-foreground mt-1">
            Регистрация и контроль допущенного транспорта
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
          <CardTitle>Поиск транспорта</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск по гос. номеру, водителю, организации..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Таблица транспорта */}
      <Card>
        <CardHeader>
          <CardTitle>Список транспорта ({filteredVehicles.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Гос. номер</TableHead>
                <TableHead>Тип ТС</TableHead>
                <TableHead>Водитель</TableHead>
                <TableHead>Организация</TableHead>
                <TableHead>Нарушения</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredVehicles.map((vehicle) => {
                const VehicleIcon = vehicleIcons[vehicle.type];
                return (
                  <TableRow key={vehicle.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <VehicleIcon className="h-5 w-5 text-muted-foreground" />
                        {vehicle.plateNumber}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{vehicleTypeLabels[vehicle.type]}</Badge>
                    </TableCell>
                    <TableCell>{vehicle.driver.fullName}</TableCell>
                    <TableCell>{vehicle.company.name}</TableCell>
                    <TableCell>
                      {vehicle.violations.length > 0 ? (
                        <Badge variant="destructive">{vehicle.violations.length}</Badge>
                      ) : (
                        <Badge variant="secondary">Нет</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Статистика по типам */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Car className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Легковой транспорт</p>
                <p className="text-2xl font-bold">
                  {mockVehicles.filter((v) => v.type === 'car').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TruckIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Грузовой транспорт</p>
                <p className="text-2xl font-bold">
                  {mockVehicles.filter((v) => v.type === 'truck').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Construction className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Спецтехника</p>
                <p className="text-2xl font-bold">
                  {mockVehicles.filter((v) => v.type === 'crane').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
