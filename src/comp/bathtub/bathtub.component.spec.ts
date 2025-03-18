import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathtubComponent } from './bathtub.component';

describe('BathtubComponent', () => {
  let component: BathtubComponent;
  let fixture: ComponentFixture<BathtubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BathtubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathtubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
