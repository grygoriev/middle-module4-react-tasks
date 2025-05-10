# Module 4. React. Tasks.

## Реализация хука useHover()

Хук для работы с наведением мышки на элемент.

Пример использование хука:

````
import { useHover } from './useHover';

function Demo() {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
}
````
