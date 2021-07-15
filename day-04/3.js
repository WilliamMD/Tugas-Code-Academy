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

function hireRangeDate(employees, startDate, endDate) {
    let isEmpty = true;
    employees.forEach(employee => {
        hire_date = new Date(employee.hire_date).getTime();
        start_date = new Date(startDate).getTime()
        end_date = new Date(endDate).getTime()

        if(hire_date >= start_date && hire_date <= end_date) {
            console.log(employee.first_name, employee.last_name);
            isEmpty = false;
        } 
    })
    if (isEmpty === true) {
        console.log("Can't find any employee hired between inputted datetime...");
    }
}

hireRangeDate(employees, '12-01-1993', '12-12-1995');
hireRangeDate(employees, '12-01-1980', '12-12-1988');
hireRangeDate(employees, '12-01-2000', '12-12-2025');