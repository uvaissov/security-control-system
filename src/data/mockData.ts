

// Mock данные для компаний
import type {Asset, Company, Employee, EventLog, Investigation, Pass, Vehicle, Visitor} from "@/types";

export const mockCompanies: Company[] = [
  {
    id: 'comp-1',
    name: 'ТОО "Промстрой"',
    bin: '123456789012',
    type: 'contractor',
    employees: [],
    vehicles: [],
  },
  {
    id: 'comp-2',
    name: 'ТОО "СтройТех"',
    bin: '987654321098',
    type: 'subcontractor',
    employees: [],
    vehicles: [],
  },
  {
    id: 'comp-3',
    name: 'АО "Безопасность Плюс"',
    bin: '456789123456',
    type: 'contractor',
    employees: [],
    vehicles: [],
  },
];

// Mock данные для сотрудников
export const mockEmployees: Employee[] = [
  {
    id: 'emp-1',
    fullName: 'Иванов Иван Иванович',
    position: 'Инженер',
    company: 'ТОО "Промстрой"',
    contactInfo: '+7 777 123 45 67',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ivan',
    documents: [
      {
        id: 'doc-1',
        name: 'Удостоверение личности',
        type: 'ID',
        url: '#',
        uploadedAt: '2024-01-15',
      },
    ],
    violations: [],
    safetyTraining: [
      {
        id: 'st-1',
        name: 'Техника безопасности на производстве',
        completedAt: '2024-01-20',
        expiresAt: '2025-01-20',
        certificate: '#',
      },
    ],
    accessStatus: 'green',
    accessType: 'permanent',
    accessLevel: 'full',
    accessLocations: ['Объект А', 'Объект Б'],
    accessHistory: [
      {
        id: 'ah-1',
        action: 'Предоставлен доступ',
        locations: ['Объект А', 'Объект Б'],
        changedBy: 'Петров П.П.',
        changedAt: '2024-01-15T10:00:00',
        reason: 'Новый сотрудник',
      },
    ],
    movementHistory: [
      {
        id: 'mv-1',
        location: 'Объект А',
        zone: 'Главный вход',
        timestamp: '2024-10-04T08:30:00',
        direction: 'entry',
      },
      {
        id: 'mv-2',
        location: 'Объект А',
        zone: 'Производственный цех',
        timestamp: '2024-10-04T09:00:00',
        direction: 'entry',
      },
    ],
  },
  {
    id: 'emp-2',
    fullName: 'Петрова Мария Сергеевна',
    position: 'Начальник отдела безопасности',
    company: 'АО "Безопасность Плюс"',
    contactInfo: '+7 777 987 65 43',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    documents: [],
    violations: [],
    safetyTraining: [
      {
        id: 'st-2',
        name: 'Охрана труда',
        completedAt: '2024-02-01',
        expiresAt: '2025-02-01',
      },
    ],
    accessStatus: 'green',
    accessType: 'permanent',
    accessLevel: 'full',
    accessLocations: ['Объект А', 'Объект Б', 'Объект В'],
    accessHistory: [],
    movementHistory: [
      {
        id: 'mv-3',
        location: 'Объект Б',
        zone: 'Административный корпус',
        timestamp: '2024-10-04T08:00:00',
        direction: 'entry',
      },
    ],
  },
  {
    id: 'emp-3',
    fullName: 'Сидоров Петр Николаевич',
    position: 'Водитель',
    company: 'ТОО "СтройТех"',
    contactInfo: '+7 777 555 44 33',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Petr',
    documents: [],
    violations: [
      {
        id: 'v-1',
        type: 'Превышение скорости',
        description: 'Превышение скорости на территории объекта',
        date: '2024-09-15',
        severity: 'medium',
      },
    ],
    safetyTraining: [],
    accessStatus: 'yellow',
    accessType: 'permanent',
    accessLevel: 'limited',
    accessLocations: ['Объект А'],
    accessHistory: [],
    movementHistory: [],
  },
  {
    id: 'emp-4',
    fullName: 'Смирнова Анна Владимировна',
    position: 'Бухгалтер',
    company: 'ТОО "Промстрой"',
    contactInfo: '+7 777 222 33 44',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna',
    documents: [],
    violations: [],
    safetyTraining: [
      {
        id: 'st-3',
        name: 'Пожарная безопасность',
        completedAt: '2024-03-01',
        expiresAt: '2025-03-01',
      },
    ],
    accessStatus: 'blue',
    accessType: 'permanent',
    accessLevel: 'full',
    accessLocations: ['Объект А'],
    accessHistory: [],
    movementHistory: [],
  },
];

// Mock данные для автотранспорта
export const mockVehicles: Vehicle[] = [
  {
    id: 'veh-1',
    plateNumber: 'А123БВ77',
    type: 'truck',
    driver: mockEmployees[2],
    company: mockCompanies[1],
    accessLocations: ['Объект А', 'Объект Б'],
    movementHistory: [
      {
        id: 'vmv-1',
        location: 'Объект А',
        zone: 'Въезд для грузового транспорта',
        timestamp: '2024-10-04T07:00:00',
        direction: 'entry',
      },
      {
        id: 'vmv-2',
        location: 'Объект А',
        zone: 'Въезд для грузового транспорта',
        timestamp: '2024-10-04T17:00:00',
        direction: 'exit',
      },
    ],
    violations: [
      {
        id: 'vv-1',
        type: 'Превышение скорости',
        description: 'Превышение допустимой скорости 20 км/ч',
        date: '2024-09-15',
        severity: 'medium',
      },
    ],
  },
  {
    id: 'veh-2',
    plateNumber: 'К456МН01',
    type: 'car',
    driver: mockEmployees[0],
    company: mockCompanies[0],
    accessLocations: ['Объект А'],
    movementHistory: [
      {
        id: 'vmv-3',
        location: 'Объект А',
        zone: 'Парковка сотрудников',
        timestamp: '2024-10-04T08:30:00',
        direction: 'entry',
      },
    ],
    violations: [],
  },
  {
    id: 'veh-3',
    plateNumber: 'Т789ОП77',
    type: 'crane',
    driver: mockEmployees[2],
    company: mockCompanies[1],
    accessLocations: ['Объект В'],
    movementHistory: [],
    violations: [],
  },
];

// Mock данные для основных средств
export const mockAssets: Asset[] = [
  {
    id: 'asset-1',
    name: 'Ноутбук Dell Latitude',
    quantity: 1,
    responsible: mockEmployees[0],
    status: 'temporary',
    documents: [
      {
        id: 'adoc-1',
        name: 'Материальный пропуск №123',
        type: 'pass',
        url: '#',
        uploadedAt: '2024-10-01',
      },
    ],
    movementHistory: [
      {
        id: 'amv-1',
        type: 'import',
        location: 'Объект А',
        timestamp: '2024-10-01T10:00:00',
        responsible: mockEmployees[0],
        document: {
          id: 'adoc-1',
          name: 'Материальный пропуск №123',
          type: 'pass',
          url: '#',
          uploadedAt: '2024-10-01',
        },
      },
    ],
    vehicle: mockVehicles[1],
  },
  {
    id: 'asset-2',
    name: 'Сварочный аппарат',
    quantity: 2,
    responsible: mockEmployees[2],
    status: 'permanent',
    documents: [],
    movementHistory: [
      {
        id: 'amv-2',
        type: 'import',
        location: 'Объект Б',
        timestamp: '2024-09-15T14:00:00',
        responsible: mockEmployees[2],
        document: {
          id: 'adoc-2',
          name: 'Накладная №456',
          type: 'invoice',
          url: '#',
          uploadedAt: '2024-09-15',
        },
      },
    ],
    vehicle: mockVehicles[0],
  },
  {
    id: 'asset-3',
    name: 'Строительные материалы',
    quantity: 150,
    responsible: mockEmployees[2],
    status: 'temporary',
    documents: [
      {
        id: 'adoc-3',
        name: 'Накладная №789',
        type: 'invoice',
        url: '#',
        uploadedAt: '2024-10-03',
      },
    ],
    movementHistory: [
      {
        id: 'amv-3',
        type: 'import',
        location: 'Объект А',
        timestamp: '2024-10-03T11:00:00',
        responsible: mockEmployees[2],
        document: {
          id: 'adoc-3',
          name: 'Накладная №789',
          type: 'invoice',
          url: '#',
          uploadedAt: '2024-10-03',
        },
      },
    ],
  },
];

// Mock данные для посетителей
export const mockVisitors: Visitor[] = [
  {
    id: 'vis-1',
    fullName: 'Козлов Дмитрий Андреевич',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry',
    passportData: '123456789',
    purpose: 'Деловая встреча',
    arrivalTime: '2024-10-04T10:00:00',
    departureTime: '2024-10-04T12:00:00',
  },
  {
    id: 'vis-2',
    fullName: 'Новикова Елена Ивановна',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
    passportData: '987654321',
    purpose: 'Инспекция',
    arrivalTime: '2024-10-04T14:00:00',
  },
];

// Mock данные для пропусков
export const mockPasses: Pass[] = [
  {
    id: 'pass-1',
    type: 'permanent',
    employee: mockEmployees[0],
    accessLevel: 'Полный',
    accessZones: ['Объект А', 'Объект Б'],
    validFrom: '2024-01-15',
    validUntil: '2025-01-15',
    isActive: true,
    history: [
      {
        id: 'ph-1',
        action: 'Выдан пропуск',
        changedBy: 'Система',
        changedAt: '2024-01-15T10:00:00',
        reason: 'Новый сотрудник',
      },
    ],
  },
  {
    id: 'pass-2',
    type: 'temporary',
    visitor: mockVisitors[0],
    accessLevel: 'Ограниченный',
    accessZones: ['Объект А - Административный корпус'],
    validFrom: '2024-10-04',
    validUntil: '2024-10-04',
    isActive: true,
    history: [],
  },
  {
    id: 'pass-3',
    type: 'permanent',
    vehicle: mockVehicles[0],
    accessLevel: 'Грузовой транспорт',
    accessZones: ['Объект А', 'Объект Б'],
    validFrom: '2024-02-01',
    validUntil: '2025-02-01',
    isActive: true,
    history: [],
  },
  {
    id: 'pass-4',
    type: 'single',
    visitor: mockVisitors[1],
    accessLevel: 'Разовый',
    accessZones: ['Объект А'],
    validFrom: '2024-10-04',
    validUntil: '2024-10-04',
    isActive: true,
    history: [],
  },
];

// Mock данные для расследований
export const mockInvestigations: Investigation[] = [
  {
    id: 'inv-1',
    title: 'Расследование инцидента с превышением скорости',
    status: 'closed',
    relatedPersons: [mockEmployees[2]],
    relatedVehicles: [mockVehicles[0]],
    relatedCompanies: [mockCompanies[1]],
    documents: [
      {
        id: 'invdoc-1',
        name: 'Протокол нарушения',
        type: 'protocol',
        url: '#',
        uploadedAt: '2024-09-15',
      },
    ],
    photos: ['https://via.placeholder.com/400x300?text=Incident+Photo'],
    videos: [],
    findings:
      'Зафиксировано превышение скорости на 15 км/ч. Водитель признал нарушение.',
    decisions:
      'Вынесено предупреждение. Водителю ограничен доступ на 1 месяц.',
    createdAt: '2024-09-15T15:00:00',
    updatedAt: '2024-09-20T10:00:00',
  },
  {
    id: 'inv-2',
    title: 'Проверка несанкционированного доступа',
    status: 'in_progress',
    relatedPersons: [mockEmployees[3]],
    relatedVehicles: [],
    relatedCompanies: [mockCompanies[0]],
    documents: [],
    photos: [],
    videos: ['https://via.placeholder.com/640x360?text=CCTV+Footage'],
    findings: 'Проводится анализ видеозаписей с камер наблюдения.',
    decisions: 'Расследование продолжается.',
    createdAt: '2024-10-01T09:00:00',
    updatedAt: '2024-10-04T16:00:00',
  },
  {
    id: 'inv-3',
    title: 'Утеря пропуска',
    status: 'open',
    relatedPersons: [mockEmployees[0]],
    relatedVehicles: [],
    relatedCompanies: [],
    documents: [
      {
        id: 'invdoc-2',
        name: 'Заявление об утере',
        type: 'application',
        url: '#',
        uploadedAt: '2024-10-03',
      },
    ],
    photos: [],
    videos: [],
    findings: 'Заявление принято к рассмотрению.',
    decisions: 'Выпуск нового пропуска после проверки.',
    createdAt: '2024-10-03T11:00:00',
    updatedAt: '2024-10-03T11:00:00',
  },
];

// Mock данные для журнала событий
export const mockEventLogs: EventLog[] = [
  {
    id: 'log-1',
    action: 'Просмотр',
    user: 'Петрова М.С.',
    module: 'Сотрудники',
    entityType: 'Employee',
    entityId: 'emp-1',
    timestamp: '2024-10-04T09:15:00',
    details: 'Просмотр карточки сотрудника Иванов И.И.',
  },
  {
    id: 'log-2',
    action: 'Редактирование',
    user: 'Петрова М.С.',
    module: 'Пропуска',
    entityType: 'Pass',
    entityId: 'pass-1',
    timestamp: '2024-10-04T10:30:00',
    details: 'Продление срока действия пропуска',
  },
  {
    id: 'log-3',
    action: 'Создание',
    user: 'Система',
    module: 'Расследования',
    entityType: 'Investigation',
    entityId: 'inv-3',
    timestamp: '2024-10-03T11:00:00',
    details: 'Создано новое расследование: Утеря пропуска',
  },
  {
    id: 'log-4',
    action: 'Архивирование',
    user: 'Администратор',
    module: 'Сотрудники',
    entityType: 'Employee',
    entityId: 'emp-999',
    timestamp: '2024-10-02T14:00:00',
    details: 'Архивирование уволенного сотрудника',
  },
  {
    id: 'log-5',
    action: 'Просмотр',
    user: 'Петрова М.С.',
    module: 'Автотранспорт',
    entityType: 'Vehicle',
    entityId: 'veh-1',
    timestamp: '2024-10-04T08:00:00',
    details: 'Просмотр истории перемещений ТС А123БВ77',
  },
];

// Статистика для Dashboard
export const dashboardStats = {
  totalEmployees: 247,
  activeEmployees: 235,
  totalVehicles: 89,
  activeVehicles: 76,
  totalPasses: 324,
  activePasses: 298,
  openInvestigations: 12,
  todayMovements: 1543,
  alerts: [
    {
      id: 'alert-1',
      type: 'warning',
      message: 'Истекает срок действия ТБ у 5 сотрудников',
      timestamp: '2024-10-04T08:00:00',
    },
    {
      id: 'alert-2',
      type: 'error',
      message: 'Попытка доступа запрещенного лица в Зону А',
      timestamp: '2024-10-04T07:30:00',
    },
    {
      id: 'alert-3',
      type: 'info',
      message: 'Новое расследование требует внимания',
      timestamp: '2024-10-03T11:00:00',
    },
  ],
  recentActivity: [
    {
      id: 'act-1',
      type: 'entry',
      person: 'Иванов И.И.',
      location: 'Объект А',
      timestamp: '2024-10-04T08:30:00',
    },
    {
      id: 'act-2',
      type: 'vehicle_entry',
      vehicle: 'А123БВ77',
      location: 'Объект Б',
      timestamp: '2024-10-04T07:00:00',
    },
    {
      id: 'act-3',
      type: 'pass_issued',
      person: 'Козлов Д.А. (посетитель)',
      location: 'Бюро пропусков',
      timestamp: '2024-10-04T10:00:00',
    },
  ],
};
