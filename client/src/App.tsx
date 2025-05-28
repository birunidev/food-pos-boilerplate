import { RecoilRoot } from "recoil";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./providers/UserProvider";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <UserProvider>
          <Router />
        </UserProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
