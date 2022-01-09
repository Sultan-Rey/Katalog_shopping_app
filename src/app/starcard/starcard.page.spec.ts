import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StarcardPage } from './starcard.page';

describe('StarcardPage', () => {
  let component: StarcardPage;
  let fixture: ComponentFixture<StarcardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarcardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
