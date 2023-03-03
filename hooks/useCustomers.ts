// apollo - graphql
import { useQuery } from "@apollo/client";
import { GET_CUSTOMERS } from "../api/graphql/queries";

const useCustomers = () => {
  const { loading, error, data } = useQuery(GET_CUSTOMERS);
  return { loading, error, data };
};

export default useCustomers;
