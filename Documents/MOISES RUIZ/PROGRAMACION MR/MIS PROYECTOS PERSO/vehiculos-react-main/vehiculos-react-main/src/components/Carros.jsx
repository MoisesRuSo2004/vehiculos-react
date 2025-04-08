import { useEffect, useState } from "react";

const Carros = ({ token }) => {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    const fetchCarros = async () => {
      const response = await fetch(
        "https://carros-electricos.wiremockapi.cloud/carros",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setCarros(data);
      } else {
        alert("Error al obtener los carros");
      }
    };

    fetchCarros();
  }, [token]);

  return (
    <div>
      <h2>Mis Carros Eléctricos</h2>
      <ul>
        {carros.map((carro, index) => (
          <li key={index}>{JSON.stringify(carro)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Carros;
