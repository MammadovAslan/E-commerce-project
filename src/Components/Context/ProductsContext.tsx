import { createContext, useState, useContext } from "react";
import Commerce from "@chec/commerce.js";
const commerce = new Commerce("pk_493453d76f26aadbc08099247c3aac974fd51e19ca6c3");

export const ProductsContext = createContext({});
export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<boolean | null>(null);

  const getProducts = async (limit?: number, sort?: string, order?: string) => {
    setLoading(true);
    try {
      const params = {
        limit: limit,
        sortBy: sort,
        sortDirection: order,
      };

      const resp = await commerce.products.list(limit && sort && order && params);
      setProducts(resp.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const data = {
    products,
    getProducts,
    loading,
    error,
  };

  return <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>;
};

export default ProductsProvider;

export const useProducts = () => useContext<any>(ProductsContext);
