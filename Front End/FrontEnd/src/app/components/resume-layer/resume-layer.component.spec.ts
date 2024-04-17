import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeLayerComponent } from './resume-layer.component';

describe('ResumeLayerComponent', () => {
  let component: ResumeLayerComponent;
  let fixture: ComponentFixture<ResumeLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeLayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
