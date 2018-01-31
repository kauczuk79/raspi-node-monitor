import * as cmd from 'node-cmd';

export default class CPUTemp implements ICPUTemp {

    private parseCpuTemp(error: object, data: string, stderr: string): number {
        if (error !== null) {
            console.error(stderr);
            return 0;
        }
        let stringTemp = /\d+\.\d+/.exec(data)[0];
        return Number.parseFloat(stringTemp);
    }

    getCpuTemp(): Promise<number> {
        return new Promise<number>(resolve => {
            cmd.get('vcgencmd measure_temp', (error: object, data: string, stderr: string) => {
                resolve(this.parseCpuTemp(error, data, stderr));
            });
        });
    };
}