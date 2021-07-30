# module(모듈)
모듈은 여러 기능을 모아둔 파이썬 파일이다.
<br />

area.py
```python
PI = 3.14

def circle(reaius):
    return PI * redius * redius
```

<br /><br />
예를 들어 원의 넓이를 구해 주는 함수가 있는 area 모듈을 만들어서

run.py
```python
import area

print(area.circle(2))
```

<br /><br />
모듈을 import해서 사용할 수 있다.

```python
from area import circle  # 필요한 함수만 import

print(circle(2))  # 함수 이름만 써주면 된다.
```

<br /><br />
이런 식으로 필요한 것만 import 를 할 수도 있다.

```python
from area import *
```

\* 을 사용하면 모든 걸 import 할 수 있지만 어떤 함수가 어떤 모듈에서
<br />
왔는지 알 수 없고 복잡해져서 파이썬 커뮤니티에서는 권장하지 않는 방식이다.

<br /><br />

## as
import 뒤에 as 키워드를 사용하면 import의 이름을 바꿔줄 수 있다.

```python
import area as a  # a 로 모듈이름 변경

print(a.circle(2))
```