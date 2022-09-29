import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MyCardComponent } from './my-card.component';

describe('MyCardComponent', () => {
  let component: MyCardComponent;
  let fixture: ComponentFixture<MyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCardComponent],
    }).compileComponents();


    fixture = TestBed.createComponent(MyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input value with default value', () => {
    const idElement = fixture.debugElement.query(By.css('.id-element'))
    const idElementText = idElement.nativeElement.textContent

    const messageElement = fixture.debugElement.query(By.css('.message-element'))
    const messageElementText = messageElement.nativeElement.textContent

    const expectedIdText = 'O ID do elemento é: 0'
    const expectedMessageText = 'O message do elemento é: '

    expect(idElementText).toBe(expectedIdText)
    expect(messageElementText).toBe(expectedMessageText)
  })

  it('should have an input value', () => {
    const inputValue = { id: 3, message: 'customMessage' }
    component.value = inputValue
    fixture.detectChanges()

    const idElement = fixture.debugElement.query(By.css('.id-element'))
    const idElementText = idElement.nativeElement.textContent

    const messageElement = fixture.debugElement.query(By.css('.message-element'))
    const messageElementText = messageElement.nativeElement.textContent

    const expectedIdText = `O ID do elemento é: ${inputValue.id}`
    const expectedMessageText = `O message do elemento é: ${inputValue.message}`

    expect(idElementText).toBe(expectedIdText)
    expect(messageElementText).toBe(expectedMessageText)
  })

  it('it should have delete button that emits the todo item on cardClick event', () => {
    // preparo
    const inputValue = { id: 3, message: 'customMessage' }
    component.value = inputValue
    fixture.detectChanges()

    const deleteBtnElement = fixture.debugElement.query(By.css('.delete-btn'))

    const onEmitSpy = spyOn(component.cardClick, 'emit');

    // ação
    deleteBtnElement.nativeElement.click()


    // validação
    expect(onEmitSpy).toHaveBeenCalledTimes(1)
    expect(onEmitSpy).toHaveBeenCalledWith(inputValue)
  })
});
