import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 윈도우가 다시 포커스되었을때 데이터를 호출할 것인지
      retry: 0, // API 요청 실패시 재시도 하는 옵션 (설정값 만큼 재시도)
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
