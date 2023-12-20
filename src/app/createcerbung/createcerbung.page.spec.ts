import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatecerbungPage } from './createcerbung.page';

describe('CreatecerbungPage', () => {
  let component: CreatecerbungPage;
  let fixture: ComponentFixture<CreatecerbungPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreatecerbungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
