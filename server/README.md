# Enpoints

port = 3030

http://localhost:3030

## Resources

### GET /api/resources/search/:str

pesquisa o nome do recurso

### GET /api/resources

ler todos os recursos na base de dados return os recursos com estatisticas (consumo diario e estimativa de fim de stock)
retorna

```
[
	{
		"_id": "6799f2b008e74859037bc3c0",
		"name": "Lion Food",
		"type": "food",
		"subtype": null,
		"quantity": 350,
		"unit": "kg",
		"dailyConsumption": 50,
		"daysLeft": 7
	},
	{
		"_id": "6799f3a2828675b64c75f46f",
		"name": "Lion Vacines",
		"type": "med",
		"subtype": "vacine",
		"quantity": 500,
		"unit": "doses",
		"dailyConsumption": 1,
		"daysLeft": 500
	}
    ...
]
```

### POST /api/resources

recebe como body

```
{
    name: string;
    type: "food" | "med";
    subtype: "string" | null;
    quantity: number;
    unit: "kg" | "doses" | "tablets";
}
```

### PATCH /api/resources/:id

:id = id do recurso

serve para acrescentar/deduzir uma quantidade à quantidade total do recurso

recebe como body

```
{
	"quantity": 50
}
```

## Animals

### GET /api/animals/search/:str

pesquisa o nome do animal

### GET /api/animals
le todos os animais na base de dados

### POST /api/animals

adiciona animal

recebe como body:

```
    name: string;
    age: number;
    gender: "male" | "female";
    species: string;
    dailyNeeds: [{
        resource_id: string;
        quantity: number;
        unit: "kg" | "doses" | "tablets";
    }];
```

### GET /api/animals/species/:animal

vai buscar as informacoes de todos animais da especie `:animal`

### GET /api/animals/:id

vai buscar info pelo `_id`

### PATCH /api/animals/:id

faz update do animal com `:id`
recebe como body

```
    name: string;
    age: number;
    gender: "male" | "female";
    species: string;
    dailyNeeds: [{
        resource_id: string;
        quantity: number;
        unit: "kg" | "doses" | "tablets";
    }];
```

### DELETE /api/animals/:id

remove animal da base de dados `:id`

## Tasks

### POST /api/tasks

adiciona tarefa
recebe como body

```
  employee_id: string;
  discription: string;
  todoType: "feed" | "administer";
  species: "string";
  quant: number;
  resource_id: string;
  done: boolean;
```

### PATCH /api/tasks/:id

update tarefa pelo `:id`

```
  employee_id: string;
  discription: string;
  todoType: "feed" | "administer";
  species: "string";
  quant: number;
  resource_id: string;
  done: boolean;
```

### DELETE /api/tasks/:id

apaga tarefa pelo `:id`

### POST /api/login

verificar se as credenciais estao corretas, se sim envia o `_id` do employee

recebe como body

```
    employeeNr: number;
    password: string;
```

## Employees

### POST /api/employee

adiciona funcionario

recebe como body:
```
    name: string;
    employeeNr: number;
    password: string;
    role: "manager" | "zookeeper";
    tel: number;
    email: string;
```

### GET /api/employee/id/:id
le todos os dados do funcionario pelo id

### GET /api/employee/:employeeNr
le todos os dados do funcionario pelo numero de funcionario

### POST /api/employee/:employeeNr
edita o funcionario com o numero :employeeNr

### DELETE /api/employee/:employeeNr
apaga o funcionario com o numero :employeeNr
