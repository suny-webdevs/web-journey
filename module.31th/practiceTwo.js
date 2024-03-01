const instructors = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'Senior'}
]

const seniorInstructors = instructors.filter(instructor => instructor.position === 'Senior')
const seniorNames = seniorInstructors.map(instructor => instructor.name)
console.log(seniorNames)