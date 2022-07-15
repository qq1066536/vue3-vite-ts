/*
 * @Author: LG
 * @Date: 2022-07-11 10:30:59
 * @Description:
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-11 15:56:13
 */

import { inject } from 'vue';
import { MessageBoxKey, MessageKey } from '../plugins/element';

export const useMessage = () => {
    return {
        $message: inject(MessageKey)!,
    };
};
export const useMessageBox = () => {
    return {
        $confirm: inject(MessageBoxKey)!.confirm,
        $alert: inject(MessageBoxKey)!.alert,
        $prompt: inject(MessageBoxKey)!.prompt,
    };
};
