import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsculturasComponent } from './esculturas.component';

describe('EsculturasComponent', () => {
  let component: EsculturasComponent;
  let fixture: ComponentFixture<EsculturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsculturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsculturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
