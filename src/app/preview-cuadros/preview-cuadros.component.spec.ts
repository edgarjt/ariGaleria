import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCuadrosComponent } from './preview-cuadros.component';

describe('PreviewCuadrosComponent', () => {
  let component: PreviewCuadrosComponent;
  let fixture: ComponentFixture<PreviewCuadrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewCuadrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCuadrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
