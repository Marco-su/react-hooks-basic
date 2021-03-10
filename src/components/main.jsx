import UseState from "./useState";
import UseEffect from "./useEffect";
import UseContext from "./useContext/useContext";
import { TestContextProvider } from "./useContext/config";
import Loader from "./Loader";

const mainContent = () => {
  return (
    <main className="container">
      <UseState />

      <UseEffect />

      <TestContextProvider>
        <UseContext />
      </TestContextProvider>

      <Loader />
    </main>
  );
};

export default mainContent;
