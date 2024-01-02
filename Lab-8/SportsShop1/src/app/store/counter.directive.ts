import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[counterOf2]',
})
export class CounterDirective {
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<Object>
  ) {}

  @Input('counterOf2')
  counter: number = 0;
  ngOnChanges(changes: SimpleChanges) {
    this.container.clear();
    for (let i = 0; i < this.counter; i++) {
      this.container.createEmbeddedView(
        this.template,
        new CounterDirectiveContext(i + 1)
      );
    }
  }
}

class CounterDirectiveContext {
  constructor(public $implicit: any) {}
}
