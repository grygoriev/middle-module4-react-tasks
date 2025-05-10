# Module 4. React. Tasks.

## Реализация хука useViewportSize()

Хук для работы получения размеров активного окна.

Пример использование хука:

````
import { useViewportSize } from '@mantine/hooks';

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}
````
