import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalComponent } from './gal.component';

describe('GalComponent', () => {
  let component: GalComponent;
  let fixture: ComponentFixture<GalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
