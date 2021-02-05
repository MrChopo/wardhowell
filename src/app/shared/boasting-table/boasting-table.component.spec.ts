import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoastingTableComponent } from './boasting-table.component';

describe('BoastingTableComponent', () => {
  let component: BoastingTableComponent;
  let fixture: ComponentFixture<BoastingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoastingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoastingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
