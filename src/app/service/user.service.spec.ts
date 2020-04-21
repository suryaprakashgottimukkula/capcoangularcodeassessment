import { TestBed, async } from '@angular/core/testing';

import { UserService } from './user.service';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppPaginationComponent } from '../app/app-pagination/app-pagination.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('UserService', () => {
  beforeEach(async (() => { TestBed.configureTestingModule({declarations: [
    AppComponent,
    AppPaginationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [HttpClient, UserService],
}).compileComponents();
}));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
