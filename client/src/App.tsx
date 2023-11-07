import { useQuery } from "@tanstack/react-query";
import { IUserInfo } from "./constants/types";

const App = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch("http://localhost:8000/api/user").then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {data.map((d: IUserInfo, i: number) => (
        <div key={i}>
          <div>{d.name}</div>
          <div>{d.city}</div>
          <div>{d.gender}</div>
          <div>{d.id}</div>
        </div>
      ))}
    </>
  );
};

export default App;
