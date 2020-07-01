import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarStickyComponent } from './sidebar-sticky.component';

describe('SidebarStickyComponent', () => {
  let component: SidebarStickyComponent;
  let fixture: ComponentFixture<SidebarStickyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarStickyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
