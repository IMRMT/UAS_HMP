import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserdetailPage } from './userdetail.page';

describe('UserdetailPage', () => {
  let component: UserdetailPage;
  let fixture: ComponentFixture<UserdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
