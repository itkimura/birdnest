import Violators from 'Frontend/views/violators/violators.js';
import MainLayout from 'Frontend/views/MainLayout.js';
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const AboutView = lazy(async () => import('Frontend/views/about/AboutView.js'));

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Violators /> },
      { path: '/violators', element: <Violators /> },
      {
        path: '/about',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AboutView />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
