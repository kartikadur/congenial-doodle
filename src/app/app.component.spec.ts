import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Package imports go here
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';

describe('example test', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have title `App works!`', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('App works!');
  });

  it('should render title as h1 tag', () => {
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('h1').textContent).toContain('App works!');
  });
});
