import { useContext, useEffect } from 'react';

import { useCloudApi } from '@/cloud/hooks/use-cloud-api';
import AppLoading from '@/components/AppLoading';
import { TenantsContext } from '@/contexts/TenantsProvider';

export default function AutoCreateTenant() {
  const api = useCloudApi();
  const { appendTenant, navigateTenant } = useContext(TenantsContext);

  useEffect(() => {
    const createTenant = async () => {
      const newTenant = await api.post('/api/tenants', { body: {} });
      appendTenant(newTenant);
      navigateTenant(newTenant.id);
    };

    void createTenant();
  }, [api, appendTenant, navigateTenant]);

  return <AppLoading />;
}
