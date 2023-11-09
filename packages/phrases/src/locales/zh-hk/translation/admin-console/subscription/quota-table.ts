const quota_table = {
  quota: {
    title: '配額',
    tenant_limit: '租戶限制',
    base_price: '基本價格',
    mau_unit_price: '* 每月活躍用戶（MAU）單價',
    mau_limit: 'MAU 限制',
  },
  application: {
    title: '應用程式',
    total: '應用程式總數',
    m2m: '機器到機器',
  },
  resource: {
    title: 'API 資源',
    resource_count: '資源數量',
    scopes_per_resource: '每資源權限',
  },
  branding: {
    title: '用戶界面與品牌',
    custom_domain: '自訂網域',
    custom_css: '自訂 CSS',
    app_logo_and_favicon: '應用程式徽標和網站圖示',
    dark_mode: '深色模式',
    i18n: '國際化',
  },
  user_authn: {
    title: '用戶認證',
    /** UNTRANSLATED */
    omni_sign_in: 'Enterprise SSO (Q4, 2023)',
    password: '密碼',
    passwordless: '免密碼登錄 - 電子郵件和短信',
    email_connector: '電子郵件連接器',
    sms_connector: '短信連接器',
    social_connectors: '社交連接器',
    standard_connectors: '標準連接器',
    built_in_email_connector: '內置電子郵件連接器',
    mfa: 'MFA',
  },
  user_management: {
    title: '用戶管理',
    user_management: '用戶管理',
    roles: '角色',
    scopes_per_role: '每角色權限',
  },
  audit_logs: {
    title: '審核日誌',
    retention: '保留期限',
  },
  hooks: {
    title: 'Webhooks',
    hooks: 'Webhooks',
  },
  organization: {
    /** UNTRANSLATED */
    title: 'Organization',
    /** UNTRANSLATED */
    organization: 'Organization (Q4, 2023)',
  },
  support: {
    title: '支援',
    community: '社群',
    customer_ticket: '客戶支援票據',
    premium: '高級版',
  },
  mau_unit_price_footnote:
    '* 您的每月活躍用戶（MAU）將根據在結算週期內登錄的頻率分為3個層級。每個層級都有不同的MAU單價。',
  unlimited: '無限制',
  contact: '聯絡',
  monthly_price: '${{value, number}}/月',
  mau_price: '${{value, number}}/MAU',
  days_one: '{{count, number}}天',
  days_other: '{{count, number}}天',
  add_on: '附加功能',
  tier: '層級{{value, number}}：',
};

export default Object.freeze(quota_table);
