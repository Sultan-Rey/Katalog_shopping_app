import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessageBoxPage } from './message-box.page';

describe('MessageBoxPage', () => {
  let component: MessageBoxPage;
  let fixture: ComponentFixture<MessageBoxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBoxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageBoxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
