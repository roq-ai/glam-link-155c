interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Beauty Brand Representative'],
  customerRoles: ['Customer'],
  tenantRoles: ['Beauty Professional', 'Salon Owner', 'Beauty Brand Representative'],
  tenantName: 'Organization',
  applicationName: 'Glam Link',
  addOns: ['chat', 'file', 'notifications'],
};
