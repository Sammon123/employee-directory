import React, { Component } from 'react'

export class Employees extends Component {
    state = {
        employee: [
            {
                id: 1,
                name: 'Peter Sammon',
                title: 'associate',
                hours: 'day shift',
                type: 'full time',
                benefits: 'Medical'
            },
            {
                id: 2,
                name: 'John Doe',
                title: 'associate',
                hours: 'evening shift',
                type: 'full time',
                benefits: 'none'
            },
            {
                id: 3,
                name: 'Dave "Larry" Allen',
                title: 'associate',
                hours: 'night shift',
                type: 'part time',
                benefits: 'Medical, Dental'
            }
        ]
    }


    render() {
        return this.state.employee.map((employee) => (
            <div className="grid">

                <div className="container">
                    <ul key={employee.id}>
                        <h1>{employee.name}</h1>
                        <li>{employee.title}</li>
                        <li>{employee.hours}</li>
                        <li>{employee.type}</li>
                        <li>{employee.benefits}</li>
                    </ul>
                </div>
            </div>
        ))
    }
}

export default Employees
