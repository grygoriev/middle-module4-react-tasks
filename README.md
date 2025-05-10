# Module 4. React. Tasks.

## Реализация хука useToggle()

Хук для работы со toggle, который принимает массив значений, которые будут переключаться по порядку.
Если ничего не передавать то будет переключать между true и false.

Пример использование хука:

````
import { useToggle } from './useToggle';

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <button onClick={() => toggle()}>
      {value}
    </button>
  );
}

// Еще примеры использования

const [value, toggle] = useToggle(['light', 'dark']);

toggle(); // -> value === 'light'
toggle(); // -> value === 'dark'

// Так же можно передать конкретное значение и тогда
// value станет одним из значений
toggle('dark'); // -> value === 'dark'
````
