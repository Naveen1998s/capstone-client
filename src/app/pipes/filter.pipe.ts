import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, firstname: string) {
    if (value.length === 0 || firstname === '') {
      return value
    }
    const users = [];
    for (const user of value) {
      if (user['fname'] === firstname) {
        users.push(user);
      }
    }
    return users;
  }
}
