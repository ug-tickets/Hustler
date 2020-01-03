import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GigreviewsPage } from './gigreviews.page';

describe('GigreviewsPage', () => {
  let component: GigreviewsPage;
  let fixture: ComponentFixture<GigreviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigreviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GigreviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
