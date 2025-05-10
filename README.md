# Module 4. React. Tasks.

## Реализация хука useWindowScroll()

Хук для работы со скроллингом.
Получение позиции скрола по осям x и y.
Установка скрола в заданную позицию x и y.

Пример использование хука:

````
import { useWindowScroll } from './useWindowScroll';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
}
````
