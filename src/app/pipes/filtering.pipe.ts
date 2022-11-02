import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class Filtering implements PipeTransform {
    transform(
        data: { name: string; age: number }[],
        text: string
    ): any {
        if (text != null || text != null) {
            return data.filter((item: any) => {
                return item.name == text;
            });
        }

        else {
            return data;
        }
    }
}