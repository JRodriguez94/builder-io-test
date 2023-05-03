import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbComponentComponent } from './cb-component.component';

describe('CbComponentComponent', () => {
  let component: CbComponentComponent;
  let fixture: ComponentFixture<CbComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CbComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
