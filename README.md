# Module 4. React. Tasks.

## Реализация хука useLocalStorage()

Хук для работы с LocalStorage.
Получение, установка или удаление из LocalStorage.

Пример использование хука:

````
import { useLocalStorage } from './useLocalStorage';

function Demo() {
  const [value, { setItem, removeItem }] = useLocalStorage('some-key');

  return (
    <div>
      <p>Значение из LocalStorage: {value}</p>
      <div>
        <button onClick={() => setItem('new storage value')}>Задать значение</button>
        <button onClick={() => removeItem()}>Удалить значение</button>
      </div>
    </div>
  );
}
````
