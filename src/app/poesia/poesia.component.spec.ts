import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoesiaComponent } from './poesia.component';

describe('PoesiaComponent', () => {
  let component: PoesiaComponent;
  let fixture: ComponentFixture<PoesiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoesiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoesiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
