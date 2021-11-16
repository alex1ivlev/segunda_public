import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productlistcomponent } from './productlistcomponent';

describe('ProductComponent', () => {
  let component: Productlistcomponent;
  let fixture: ComponentFixture<Productlistcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Productlistcomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Productlistcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
