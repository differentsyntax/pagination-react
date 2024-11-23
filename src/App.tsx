import { useEffect, useState } from "react";
import "./App.css";

const url: string = "https://fakestoreapi.com/products";

type ProductData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const initialData: ProductData[] = [];

function App() {
  const [productData, setProductData] = useState<ProductData[]>(initialData);
  const [displayData, setDisplayData] = useState<ProductData[]>(initialData);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}`);
      const data = await res.json();

      if (data) {
        setProductData(data);
        setDisplayData(data.slice(0, 5));
      }
    } catch (error) {
      console.log("Error fetching response: ", (error as Error).message);
      setError(true);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setDisplayData(productData.slice(page * 5 - 5, page * 5));
  }, [page]);

  return (
    <>
      {error && <h2>{`Error displaying data...`}</h2>}
      {!loading && !error ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={() =>
                setPage((prevState) =>
                  prevState > 0 ? prevState - 1 : prevState
                )
              }
              disabled={page < 2 ? true : false}
            >{`<`}</button>
            <h3>{page}</h3>
            <button
              onClick={() =>
                setPage((prevState) =>
                  prevState > productData.length / 5 ? prevState : prevState + 1
                )
              }
              disabled={page >= productData.length / 5 ? true : false}
            >{`>`}</button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <table>
              <thead>
                <tr>
                  <th>{`ID`}</th>
                  <th>{`Title`}</th>
                  <th>{`Price`}</th>
                  <th>{`Description`}</th>
                  <th>{`Category`}</th>
                  <th>{`Image`}</th>
                </tr>
              </thead>
              <tbody>
                {displayData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{`$${item.price}`}</td>
                      <td>{item.description}</td>
                      <td>{item.category}</td>
                      <td>
                        <img
                          src={item.image}
                          alt="product image"
                          height={50}
                          width={50}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h2>Loading....</h2>
      )}
    </>
  );
}

export default App;
