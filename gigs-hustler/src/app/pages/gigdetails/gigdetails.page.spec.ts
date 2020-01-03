import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GigdetailsPage } from './gigdetails.page';

describe('GigdetailsPage', () => {
  let component: GigdetailsPage;
  let fixture: ComponentFixture<GigdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GigdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
