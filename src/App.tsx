import React, { FC } from 'react'
import Router from './routes'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SkeletonTheme } from 'react-loading-skeleton'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

const App: FC<Record<string, never>> = () => {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Router />
          <ReactQueryDevtools initialIsOpen={false} />
        </SkeletonTheme>
      </QueryClientProvider>
      <ToastContainer />
    </div>
  )
}

export default App
