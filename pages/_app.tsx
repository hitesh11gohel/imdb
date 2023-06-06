import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/global.css";

const queryClient = new QueryClient();

function ImdbApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-[#101010] text-gray-100 dark:text-white dark:bg-gray-[#101010] dark:text-gray-200 min-h-screen">
        <div className="p-3">
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default ImdbApp;
