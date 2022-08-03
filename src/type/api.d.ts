/*
 * @Author: LG
 * @Date: 2022-08-03 08:22:29
 * @Description:
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-08-03 08:37:37
 */
interface actionsDto {
    active: boolean;
    code: string;
    createBy: number;
    createTime: string;
    httpBody: string;
    httpMethod: string;
    httpUrl: string;
    id: number;
    name: string;
    processMode: string;
    prompt: string;
    reloadRequired: boolean;
    requireViewFilter: boolean;
    type: string;
    updateBy: number;
    updateTime: string;
    version: number;
    viewId: number;
}
interface fieldDto {
    id: number;
    label: string;
    name: string;
    [key: string]: boolean | string | number;
}
interface dataview {
    actions: actionsDto[];
    code: string;
    editable: boolean;
    fields: fieldDto[];
    filters: fieldDto[];
    id: number;
    name: string;
    pageable: boolean;
    query: object;
    queryUrl: string;
    treeView: string;
}
