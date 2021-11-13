import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistchildComponent } from './wishlistlist.component';

describe('WishlistchildComponent', () => {
  let component: WishlistchildComponent;
  let fixture: ComponentFixture<WishlistchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
