import React from 'react'

const List = ({ data }) => (
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {data.map((d, index) => (
                <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                </tr>
            ))}
        </tbody>
    </table>
)

export default List