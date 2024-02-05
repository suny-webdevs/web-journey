const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
]

function totalSalaryPerMonth(employees) {
    let totalSalary = 0
    for(let i = 0; i < employees.length; i++) {
        const currentSalary = employees[i].starting + (employees[i].increment * employees[i].experience)
        totalSalary += currentSalary
    }
    return totalSalary
}

const totalSalary = totalSalaryPerMonth(employees)
console.log("Total salary per month " + totalSalary + "tk")