// done
const employees = [
    {
        employees_id: 100,
        first_name: "Steven",
        last_name: "King",
        email: "steven.king@sqltutorial.org",
        phone_number: "515.123.4567",
        hire_date: "1987-06-17",
        job_id: 4,
        salary: "2400.00",
        manager_id: null,
        department_id: 9,
        employees_images: [
            {
                epim_id: 27,
                epim_filename: "after order.jpg",
                epim_path: "/uploads/after order.jpg",
                epim_primary: false,
                epim_employee_id: 100
            },
            {
                epim_id: 26,
                epim_filename: "cangkir jadul.jpg",
                epim_path: "/uploads/cangkir jadul.jpg",
                epim_primary: false,
                epim_employee_id: 100
            },
        ]
    },
    {
        employees_id: 100,
        first_name: "William",
        last_name: "Mandang",
        email: "williammandang@sqltutorial.org",
        phone_number: "082239790101",
        hire_date: "2021-06-17",
        job_id: 2,
        salary: "6400.00",
        manager_id: 1,
        department_id: 8,
        employees_images: [
            {
                epim_id: 27,
                epim_filename: "after order.jpg",
                epim_path: "/uploads/after order.jpg",
                epim_primary: false,
                epim_employee_id: 100
            },
            {
                epim_id: 26,
                epim_filename: "cangkir jadul.jpg",
                epim_path: "/uploads/cangkir jadul.jpg",
                epim_primary: false,
                epim_employee_id: 100
            },
        ]
    },
    {
        employees_id: 100,
        first_name: "Wilson",
        last_name: "Mandang",
        email: "williammandang@sqltutorial.org",
        phone_number: "082239790101",
        hire_date: "2021-06-17",
        job_id: 2,
        salary: "12000.00",
        manager_id: 1,
        department_id: 8,
        employees_images: [
            {
                epim_id: 27,
                epim_filename: "after order.jpg",
                epim_path: "/uploads/after order.jpg",
                epim_primary: false,
                epim_employee_id: 100
            },
            {
                epim_id: 26,
                epim_filename: "cangkir jadul.jpg",
                epim_path: "/uploads/cangkir jadul.jpg",
                epim_primary: false,
                epim_employee_id: 100
            },
        ]
    }
]

function salaryMinMax(employees) {
    let salary_min = +employees[0].salary;
    let salary_max = +employees[0].salary;
    let employee_min = `${employees[0].first_name} ${employees[0].last_name}`;
    let employee_max = `${employees[0].first_name} ${employees[0].last_name}`;

    for(let i = 0; i < employees.length; i++) {
        for (let j = i+1; j < employees.length; j++) {
            if (+employees[j].salary > +employees[i].salary) {
                salary_max = +employees[j].salary;
                employee_max = `${employees[j].first_name} ${employees[j].last_name}`;
            } else if (+employees[j].salary < +employees[i].salary) {
                salary_min = +employees[j].salary;
                employee_min = `${employees[j].first_name} ${employees[j].last_name}`;
            }
        }

        return console.log(`${employee_min}: ${salary_min}\n${employee_max}: ${salary_max}`);
    }
    
    
}


salaryMinMax(employees);