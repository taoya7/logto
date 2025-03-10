import { type Nullable } from '@silverhand/essentials';
import { z } from 'zod';

import { type InvoicesResponse, type SubscriptionPlanResponse } from '@/cloud/types/router';

export enum ReservedPlanName {
  Free = 'Free',
  Hobby = 'Hobby',
  Pro = 'Pro',
  Enterprise = 'Enterprise',
}

export type SubscriptionPlanQuota = Omit<
  SubscriptionPlanResponse['quota'],
  'builtInEmailConnectorEnabled'
> & {
  // Support
  communitySupportEnabled: boolean;
  ticketSupportResponseTime: number;
};

export type SubscriptionPlanQuotaEntries = Array<
  [keyof SubscriptionPlanQuota, SubscriptionPlanQuota[keyof SubscriptionPlanQuota]]
>;

export type SubscriptionPlan = Omit<SubscriptionPlanResponse, 'quota'> & {
  quota: SubscriptionPlanQuota;
};

type SubscriptionPlanTable = Partial<
  SubscriptionPlanQuota & {
    // Base quota
    basePrice: string;
    // UI and branding
    customCssEnabled: boolean;
    appLogoAndFaviconEnabled: boolean;
    darkModeEnabled: boolean;
    i18nEnabled: boolean;
    // User authn
    passwordSignInEnabled: boolean;
    passwordlessSignInEnabled: boolean;
    emailConnectorsEnabled: boolean;
    smsConnectorsEnabled: boolean;
    // User management
    userManagementEnabled: boolean;
    // Organization
    allowedUsersPerOrganization: Nullable<number>;
    invitationEnabled: boolean;
    orgRolesLimit: Nullable<number>;
    orgPermissionsLimit: Nullable<number>;
    justInTimeProvisioningEnabled: boolean;
    // Support
    soc2ReportEnabled: boolean;
    hipaaOrBaaReportEnabled: boolean;
  }
>;

export enum SubscriptionPlanTableGroupKey {
  base = 'base',
  applications = 'applications',
  resources = 'resources',
  branding = 'branding',
  userAuthentication = 'userAuthentication',
  roles = 'roles',
  auditLogs = 'auditLogs',
  hooks = 'hooks',
  organizations = 'organizations',
  support = 'support',
}

export type SubscriptionPlanTableGroupKeyMap = {
  [key in SubscriptionPlanTableGroupKey]: Array<keyof Required<SubscriptionPlanTable>>;
};

export const localCheckoutSessionGuard = z.object({
  state: z.string(),
  sessionId: z.string(),
  callbackPage: z.string().optional(),
  isDowngrade: z.boolean().optional(),
});

export type LocalCheckoutSession = z.infer<typeof localCheckoutSessionGuard>;

export type InvoiceStatus = InvoicesResponse['invoices'][number]['status'];
