import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproductreactiveComponent } from './editproductreactive.component';

describe('EditproductreactiveComponent', () => {
  let component: EditproductreactiveComponent;
  let fixture: ComponentFixture<EditproductreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditproductreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditproductreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
