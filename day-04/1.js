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
    }
]

function searchEmployee(employees, prefix) {
    let temp = [];
    employees.forEach(employee => {
        if (employee.first_name[0] === prefix) {
            console.log(employee.first_name, employee.last_name);
            temp.push(employee);
        }
    })
    if (temp.length === 0) {
        console.log("Can't find any employee with that prefix...");
    }
}

searchEmployee(employees, "B");
searchEmployee(employees, "W");
searchEmployee(employees, "S");