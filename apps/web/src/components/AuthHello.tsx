import { $api } from "@/lib/api/client.ts";

const AuthHello = () => {
  const {
    data: helloAuthenticated,
    isLoading,
    error,
    isError,
  } = $api.useQuery("get", "/hello/authenticated");

  if (isLoading) {
    return <div>Loading authenticated hello...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Authenticated Message: {helloAuthenticated?.message}</div>;
};

export { AuthHello };
