import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'limit' })

export class Customise implements PipeTransform {
    transform(value: any, size: number = 5) {
        return value.substr(0, size) + '...';
    }
}