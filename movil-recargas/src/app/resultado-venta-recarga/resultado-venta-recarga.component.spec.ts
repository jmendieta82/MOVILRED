import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultadoVentaRecargaComponent } from './resultado-venta-recarga.component';

describe('ResultadoVentaRecargaComponent', () => {
  let component: ResultadoVentaRecargaComponent;
  let fixture: ComponentFixture<ResultadoVentaRecargaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoVentaRecargaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadoVentaRecargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
