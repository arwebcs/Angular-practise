import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsShowComponent } from './goods-show.component';

describe('GoodsShowComponent', () => {
  let component: GoodsShowComponent;
  let fixture: ComponentFixture<GoodsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
