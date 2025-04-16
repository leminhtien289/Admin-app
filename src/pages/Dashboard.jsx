import React, { useState, useEffect } from 'react';
import { FileText, Import, Import as Export, Plus } from 'lucide-react';
import TableRow from '../components/TableRow';

export default function Dashboard() {
    const [customers, setCustomers] = useState([

    ]);

    useEffect(() => {
        fetch("http://localhost:3000/customers")
            .then(res => res.json())
            .then(customers => setCustomers(customers));
    }, []);

    console.log(customers)

    return (
        <div className="max-w-7xl mx-auto">

        </div>
    );
}