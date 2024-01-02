import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sqrt",
})
export class SqrtPipe implements PipeTransform {
  transform(value: number): number {
    if (value < 0) {
      return NaN; // або можна повернути 0, null і т.д.
    }
    return Math.sqrt(value);
  }
}
