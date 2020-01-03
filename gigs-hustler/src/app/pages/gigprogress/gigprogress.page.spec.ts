import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GigprogressPage } from './gigprogress.page';

describe('GigprogressPage', () => {
  let component: GigprogressPage;
  let fixture: ComponentFixture<GigprogressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigprogressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GigprogressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
