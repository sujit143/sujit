import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaskreactiveComponent } from './editaskreactive.component';

describe('EditaskreactiveComponent', () => {
  let component: EditaskreactiveComponent;
  let fixture: ComponentFixture<EditaskreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaskreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaskreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
