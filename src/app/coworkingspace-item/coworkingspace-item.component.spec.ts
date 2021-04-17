import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkingspaceItemComponent } from './coworkingspace-item.component';

describe('CoworkingspaceItemComponent', () => {
  let component: CoworkingspaceItemComponent;
  let fixture: ComponentFixture<CoworkingspaceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoworkingspaceItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoworkingspaceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
