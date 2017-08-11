import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../../_services/index';

import { UserMenuComponent } from './user-menu.component';
import {Http} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        providers: [ UserService, Http, MockBackend ],
        // imports: [ RouterTestingModule ],
        declarations: [ UserMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    /*
    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    */
  });

  it('should be created', () => {
    // expect(component).toBeTruthy();
  });
});
