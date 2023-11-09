const quota_item = {
  tenant_limit: {
    name: 'Kiracilar',
    limited: '{{count, number}} kiraci',
    limited_other: '{{count, number}} kiracilar',
    unlimited: 'Sınırsız kiracilar',
    not_eligible: 'Kiracilarinizi kaldirin',
  },
  mau_limit: {
    name: 'Aylık aktif kullanıcılar',
    limited: '{{count, number}} MAU',
    unlimited: 'Sınırsız MAU',
    not_eligible: 'Tüm kullanıcılarınızı kaldirin',
  },
  applications_limit: {
    name: 'Uygulamalar',
    limited: '{{count, number}} uygulama',
    limited_other: '{{count, number}} uygulamalar',
    unlimited: 'Sınırsız uygulamalar',
    not_eligible: 'Uygulamalarınızı kaldirin',
  },
  machine_to_machine_limit: {
    name: 'Makineye Makine',
    limited: '{{count, number}} makineye makine uygulama',
    limited_other: '{{count, number}} makineye makine uygulamalar',
    unlimited: 'Sınırsız makineye makine uygulamalar',
    not_eligible: 'Makineye makine uygulamalarınızı kaldirin',
  },
  resources_limit: {
    name: 'API kaynakları',
    limited: '{{count, number}} API kaynak',
    limited_other: '{{count, number}} API kaynakları',
    unlimited: 'Sınırsız API kaynakları',
    not_eligible: 'API kaynaklarınızı kaldirin',
  },
  scopes_per_resource_limit: {
    name: 'Kaynak izinleri',
    limited: '{{count, number}} izin kaynak başına',
    limited_other: '{{count, number}} izinler kaynak başına',
    unlimited: 'Sınırsız izin kaynak başına',
    not_eligible: 'Kaynak izinlerinizi kaldirin',
  },
  custom_domain_enabled: {
    name: 'Özel alan adı',
    limited: 'Özel alan adı',
    unlimited: 'Özel alan adı',
    not_eligible: 'Özel alan adınızı kaldirin',
  },
  omni_sign_in_enabled: {
    /** UNTRANSLATED */
    name: 'SSO',
    /** UNTRANSLATED */
    limited: 'SSO',
    /** UNTRANSLATED */
    unlimited: 'SSO',
    /** UNTRANSLATED */
    not_eligible: 'Disable your SSO',
  },
  built_in_email_connector_enabled: {
    name: 'Dahili e-posta bağlayıcı',
    limited: 'Dahili e-posta bağlayıcı',
    unlimited: 'Dahili e-posta bağlayıcı',
    not_eligible: 'Dahili e-posta bağlayıcınızı kaldirin',
  },
  social_connectors_limit: {
    name: 'Sosyal bağlayıcılar',
    limited: '{{count, number}} sosyal bağlayıcı',
    limited_other: '{{count, number}} sosyal bağlayıcılar',
    unlimited: 'Sınırsız sosyal bağlayıcılar',
    not_eligible: 'Sosyal bağlayıcılarınızı kaldirin',
  },
  standard_connectors_limit: {
    name: 'Ücretsiz standart bağlayıcılar',
    limited: '{{count, number}} ücretsiz standart bağlayıcı',
    limited_other: '{{count, number}} ücretsiz standart bağlayıcılar',
    unlimited: 'Sınırsız standart bağlayıcılar',
    not_eligible: 'Standart bağlayıcılarınızı kaldirin',
  },
  roles_limit: {
    name: 'Roller',
    limited: '{{count, number}} rol',
    limited_other: '{{count, number}} roller',
    unlimited: 'Sınırsız roller',
    not_eligible: 'Rollerini kaldirin',
  },
  scopes_per_role_limit: {
    name: 'Rol izinleri',
    limited: '{{count, number}} izin rol başına',
    limited_other: '{{count, number}} izinler rol başına',
    unlimited: 'Sınırsız izin rol başına',
    not_eligible: 'Rol izinlerinizi kaldirin',
  },
  hooks_limit: {
    name: 'Webhooks',
    limited: '{{count, number}} webhook',
    limited_other: '{{count, number}} webhooks',
    unlimited: 'Sınırsız webhooklar',
    not_eligible: 'Webhooklarınızı kaldırın',
  },
  organization_enabled: {
    /** UNTRANSLATED */
    name: 'Organization',
    /** UNTRANSLATED */
    limited: 'Organization',
    /** UNTRANSLATED */
    unlimited: 'Organization',
    /** UNTRANSLATED */
    not_eligible: 'Remove your organizations',
  },
  audit_logs_retention_days: {
    name: 'Denetim günlükleri saklama süresi',
    limited: 'Denetim günlükleri saklama süresi: {{count, number}} gün',
    limited_other: 'Denetim günlükleri saklama süresi: {{count, number}} gün',
    unlimited: 'Sınırsız günler',
    not_eligible: 'Denetim günlüğü yok',
  },
  community_support_enabled: {
    name: 'Topluluk desteği',
    limited: 'Topluluk desteği',
    unlimited: 'Topluluk desteği',
    not_eligible: 'Topluluk desteği yok',
  },
  customer_ticket_support: {
    name: 'Müşteri destek bileti',
    limited: '{{count, number}} saat müşteri destek bileti',
    limited_other: '{{count, number}} saat müşteri destek bileti',
    unlimited: 'Müşteri destek bileti',
    not_eligible: 'Müşteri destek bileti yok',
  },
  mfa_enabled: {
    name: 'MFA',
    limited: 'MFA',
    unlimited: 'MFA',
    not_eligible: "MFA'nızı devre dışı bırakın",
  },
};

export default Object.freeze(quota_item);
