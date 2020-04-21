import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppPaginationComponent } from './app/app-pagination/app-pagination.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppPaginationComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule
      ],
      providers: [HttpClient, UserService],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularcodechallenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angularcodechallenge');
  });
});
