import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CerbungdetailPage } from './cerbungdetail.page';

describe('CerbungdetailPage', () => {
  let component: CerbungdetailPage;
  let fixture: ComponentFixture<CerbungdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CerbungdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
