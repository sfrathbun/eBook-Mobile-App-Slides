import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TableOfContentsPage } from './table-of-contents.page';

describe('TableOfContentsPage', () => {
  let component: TableOfContentsPage;
  let fixture: ComponentFixture<TableOfContentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOfContentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TableOfContentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
