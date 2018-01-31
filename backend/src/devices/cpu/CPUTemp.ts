import * as cmd from 'node-cmd';

export default class CPUTemp implements ICPUTemp {

    /**
     * { killed: boolean, code: number, signal: null?, cmd: string}
     */
    getCpuTemp(): Promise<number> {
        return new Promise<number>(resolve => {
            cmd.get('vcgencmd measure_temp', (error: object, data: string, stderr: string) => {
                if (error !== null) {
                    console.error(stderr);
                    resolve(0);
                } else {
                    var stringTemp = /\d+\.\d+/.exec(data)[0];
                    var temp = Number.parseFloat(stringTemp);
                    resolve(temp);
                }
            });
        });
    };
}