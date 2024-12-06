import { FC, lazy, useEffect } from 'react';
import { PagePaths } from '@/constants';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '@GeneralComponents/SharedLayout';
import { usePromotions } from '@/hooks';
import { useAuthStore } from '@/store/store';
import {
  selectIsRefreshing,
  selectRefresh,
  selectError,
} from '@/store/auth/selectors';
import useStoreError from '@/hooks/useStoreError';

const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const ServiceUnavailablePage = lazy(
  () => import('@/pages/ServiceUnavailablePage')
);
const MainPage = lazy(() => import('@/pages/MainPage'));
const CabinetPage = lazy(() => import('@/pages/CabinetPage'));
const PromotionsPage = lazy(() => import('@/pages/PromotionsPage'));
const PromotionDetailsPage = lazy(() => import('@/pages/PromotionDetailsPage'));
const RegisterCodePage = lazy(() => import('@/pages/RegisterCodePage'));
const UserCertificatePage = lazy(() => import('@/pages/UserCertificatePage'));
const UserPrizePage = lazy(() => import('@/pages/UserPrizePage'));
const UserCodePage = lazy(() => import('@/pages/UserCodePage'));
const PrivateRoute = lazy(() => import('@GeneralComponents/PrivateRoute'));

const App: FC = () => {
  usePromotions();
  const refresh = useAuthStore(selectRefresh);
  const error = useAuthStore(selectError);
  const isRefreshing = useAuthStore(selectIsRefreshing);
  useStoreError(error);

  useEffect(() => {
    const refreshProfile = async () => {
      await refresh();
    };

    refreshProfile();
  }, [refresh]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path={PagePaths.root} element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path={PagePaths.root} element={<MainPage />} />
          <Route
            path={PagePaths.cabinet}
            element={<PrivateRoute element={<CabinetPage />} />}
          />
          <Route
            path={`${PagePaths.userCertificate}/:${PagePaths.dynamicParam}`}
            element={<PrivateRoute element={<UserCertificatePage />} />}
          />
          <Route
            path={`${PagePaths.userPrize}/:${PagePaths.dynamicParam}`}
            element={<PrivateRoute element={<UserPrizePage />} />}
          />
          <Route
            path={`${PagePaths.userCode}/:${PagePaths.dynamicParam}`}
            element={<PrivateRoute element={<UserCodePage />} />}
          />
          <Route path={PagePaths.promotions} element={<PromotionsPage />} />
          <Route
            path={`${PagePaths.promotions}/:${PagePaths.dynamicParam}`}
            element={<PromotionDetailsPage />}
          />
          <Route
            path={`${PagePaths.code}/:${PagePaths.dynamicParam}`}
            element={<PrivateRoute element={<RegisterCodePage />} />}
          />
          <Route
            path={PagePaths.serviceUnavailable}
            element={<ServiceUnavailablePage />}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    )
  );
};

export default App;
