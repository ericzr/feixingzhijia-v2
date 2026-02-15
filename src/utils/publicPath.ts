/**
 * 返回带 base 的静态资源路径，用于 GitHub Pages 等子路径部署。
 * 例如: getPublicUrl('icons/settings/back-arrow.svg') => '/feixingzhijia-v2/icons/settings/back-arrow.svg'
 */
export function getPublicUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base.endsWith('/') ? base : base + '/'}${path.replace(/^\//, '')}`;
}
