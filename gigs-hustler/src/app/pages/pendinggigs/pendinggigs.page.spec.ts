import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendinggigsPage } from './pendinggigs.page';

describe('PendinggigsPage', () => {
  let component: PendinggigsPage;
  let fixture: ComponentFixture<PendinggigsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendinggigsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendinggigsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
