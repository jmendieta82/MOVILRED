import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoFacturaPagadaComponent } from './info-factura-pagada.component';

describe('InfoFacturaPagadaComponent', () => {
  let component: InfoFacturaPagadaComponent;
  let fixture: ComponentFixture<InfoFacturaPagadaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoFacturaPagadaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoFacturaPagadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
