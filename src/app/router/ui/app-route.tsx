import { Suspense, useCallback } from 'react';
import { RouteProps } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/app-route-config';
import { LoaderLayout } from '../../../entities/loader-layout';

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Suspense fallback={<LoaderLayout/>}>
        {route.element}
      </Suspense>
    )

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <div className="container">
            { element }
          </div>
        }
      />
    )
  }, [])

  return (
    <Routes>
      {Object
        .values(routeConfig)
        .map(renderWithWrapper)
      }
    </Routes>
  )
}
