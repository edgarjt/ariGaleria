import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcecaComponent } from './aceca.component';

describe('AcecaComponent', () => {
  let component: AcecaComponent;
  let fixture: ComponentFixture<AcecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
