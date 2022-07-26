/*
 * @Author: LG
 * @Date: 2022-07-26 10:20:50
 * @Description:
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-26 10:20:50
 */
const formatUrl = (path: string) => `aas/api/v1${path}`;
export const aasApi = {
    login: formatUrl('/user/login'),
};
