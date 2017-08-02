/* tslint:disable:no-console */
import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// Services
import { A01Service } from './a01.service';

@Component({
  selector: 'app-a01',
  templateUrl: 'a01.component.html',
  styleUrls: ['a01.component.scss'],
})

export class A01Component implements OnInit {
  @ViewChild('output') public output: ElementRef;

  public title = 'Towers of Hanoi'
  public form: FormGroup;

  public allSteps: any[];

  constructor(
    private service: A01Service,
    private render: Renderer2,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      disks: [3],
    });
  }

  setupHanoi(value: object) {

    // Empty unordered list
    while (this.output.nativeElement.childNodes.length > 0) {
      this.output.nativeElement.removeChild(this.output.nativeElement.childNodes[0]);
    }

    this.service.getHanoiResult(+value['disks']).subscribe(
      (d: object) => {
        const from = d['from'];
        const to = d['to'];
        const step = `move disk from ${from + 1} to ${to + 1}`;
        const item = this.render.createElement('li');
        this.render.appendChild(item, this.render.createText(step));
        this.render.appendChild(this.output.nativeElement, item);
      },
      (e: Error) => { console.log('Error', e); },
      () => { console.log('completed'); },
    );
  }

}
