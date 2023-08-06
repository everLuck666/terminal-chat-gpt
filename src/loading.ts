import ora from 'ora';

import type { Ora } from 'ora';

let oral: Ora;
export function startLoading() {
  oral = ora('正在努力回答中，请稍等\r').start();
}

export function endLoading() {
  oral.stop();
}
