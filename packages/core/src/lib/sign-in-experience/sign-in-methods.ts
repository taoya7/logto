import type { SignInMethods } from '@logto/schemas';
import { SignInMethodState } from '@logto/schemas';
import type { Optional } from '@silverhand/essentials';

import type { LogtoConnector } from '@/connectors/types';
import { ConnectorType } from '@/connectors/types';
import RequestError from '@/errors/RequestError';
import assertThat from '@/utils/assert-that';

export const isEnabled = (state: SignInMethodState) => state !== SignInMethodState.Disabled;

export const validateSignInMethods = (
  signInMethods: SignInMethods,
  socialSignInConnectorTargets: Optional<string[]>,
  enabledConnectors: LogtoConnector[]
) => {
  const signInMethodStates = Object.values(signInMethods);
  assertThat(
    signInMethodStates.filter((state) => state === SignInMethodState.Primary).length === 1,
    'sign_in_experiences.not_one_and_only_one_primary_sign_in_method'
  );

  if (isEnabled(signInMethods.email)) {
    assertThat(
      enabledConnectors.some((item) => item.type === ConnectorType.Email),
      new RequestError({
        code: 'sign_in_experiences.enabled_connector_not_found',
        type: ConnectorType.Email,
      })
    );
  }

  if (isEnabled(signInMethods.sms)) {
    assertThat(
      enabledConnectors.some((item) => item.type === ConnectorType.Sms),
      new RequestError({
        code: 'sign_in_experiences.enabled_connector_not_found',
        type: ConnectorType.Sms,
      })
    );
  }

  if (isEnabled(signInMethods.social)) {
    assertThat(
      enabledConnectors.some((item) => item.type === ConnectorType.Social),
      new RequestError({
        code: 'sign_in_experiences.enabled_connector_not_found',
        type: ConnectorType.Social,
      })
    );

    assertThat(
      socialSignInConnectorTargets && socialSignInConnectorTargets.length > 0,
      'sign_in_experiences.empty_social_connectors'
    );
  }
};