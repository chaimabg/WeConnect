import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkingSpacesListComponent } from './coworking-spaces-list.component';

describe('CoworkingSpacesListComponent', () => {
  let component: CoworkingSpacesListComponent;
  let fixture: ComponentFixture<CoworkingSpacesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoworkingSpacesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoworkingSpacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
