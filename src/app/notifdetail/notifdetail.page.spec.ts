import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotifdetailPage } from './notifdetail.page';

describe('NotifdetailPage', () => {
  let component: NotifdetailPage;
  let fixture: ComponentFixture<NotifdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotifdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
