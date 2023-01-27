import { useState, useEffect } from "react";
import Commerce from "@chec/commerce.js";
import { Product } from "@chec/commerce.js/types/product";
const commerce = new Commerce("pk_493453d76f26aadbc08099247c3aac974fd51e19ca6c3");

const ProductAxios = () => {
  const [product, setProduct] = useState<Product >();
  const [id, setId] = useState<string | undefined>("");
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<boolean | null>(null);

  useEffect(() => {
    if (id !== "") {
      retrieveProduct(id);
    }
  }, [id]);

  const getProduct = async (name: string | undefined) => {
    try {
      setLoading(true);
      const response = await commerce.products.list({
        query: `${name}`,
      });
      setId(response.data[0].id);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const retrieveProduct = async (id: string | undefined) => {
    try {
      setLoading(true);
      const response = await commerce.products.retrieve(`${id}`);
      setProduct(response);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    product,
    loading,
    error,
    getProduct,
  };
};

export default ProductAxios;
