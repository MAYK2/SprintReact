import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import CardAccount from "../components/CardAccount";
import axios from "axios";

function Account() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/api/clients/');
        setData([response.data[0]]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Title text="Your selected account" />
      <img src="/assets/finanzas.jpeg" style={{ width: "60%" }} className="mx-auto pb-16" alt="Selected account" />
      <div className="w-[100%] relative pb-20">
        <button className='border absolute left-32 top-2 border-black rounded-3xl w-[250px] h-[70px] place-self-center bg-[#4a081f] text-white font-custom transition duration-300 ease-in-out hover:bg-black'>
          Request Account
        </button>
      </div>

      {/* Renderizar las cuentas del primer cliente */}
      {data.map((cliente, index) => (
        <div key={index}>
          <h2 className="text-2xl font-bold mt-2 mb-2 text-center">{cliente.firstName} {cliente.lastName}</h2>
          <div className="flex justify-center gap-16 pb-10">
          
            {cliente.cuentas.map((cuenta) => (
              <CardAccount
                key={cuenta.id}
                accountNumber={cuenta.numero}
                amount={`$${cuenta.saldo}`}
                creationDate={cuenta.fechaCreacion}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Account;
