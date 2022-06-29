import type { ITestDataModel } from '../dataModels/ITestDataModel';

export class TestModel {
    constructor(private id: string, private name: string, private age: number) {}

    get valueObject(): ITestDataModel {
        return {
            age: this.age,
            id: this.id,
            name: this.name,
        };
    }
}
