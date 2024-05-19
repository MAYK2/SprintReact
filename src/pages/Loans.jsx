import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../components/Title";
import Card from "../components/Card";

export const Loans = () => {
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/api/clients/")
      .then(response => {
        // Filtrar los datos para obtener solo los del primer cliente
        const firstClient = response.data.find(client => client.id === 1);
        setClientData(firstClient);
      })
      .catch(error => {
        console.error("Error fetching client's data:", error);
      });
  }, []);

  return (
    <div>
      <Title text="Your Loans" />

      {/* Verifica si se han cargado los datos del cliente */}
      {clientData && (
      

        <div className="flex flex-wrap gap-4 items-center justify-around flex-col">
          <h2 className="text-xl font-bold text-gray-900 uppercase mb-6">{clientData.firstName} {clientData.lastName}</h2>
          {clientData.loans.map((loan) => (
            <Card
              key={loan.id}
              accountNumber={loan.loanId}
              amount={`$${loan.quantity}`}
              creationDate={`Payments: ${loan.payments}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Loans;
