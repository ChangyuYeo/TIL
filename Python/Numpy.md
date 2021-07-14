# Numpy (넘파이)

- 리스트는 여러 개의 값들이 저장할 수 있는 자료구조로 활용도가 높다.
- 다양한 자료형의 데이터를 여러 개 저장할 수 있으며 데이터를 변경, 추가, 제거할 수 있다.

```python
scores = [10, 20, 30, 40, 50, 60]
```

- 하지만 리스트 간의 다양한 연산기능이 부족하여 기본 리스트대신에 `넘파이` 라는 라이브러리를 사용한다.
- 넘파이는 대용량의 배열과 행렬 연산을 빠르게 수행하며,
- 고차원적인 수학 연산자와 함수를 포함하고 있는 라이브러리다.

<br />

## 넘파이의 장점

- 다차원 배열을 이용하여 **연산이 편리함**
- 파이썬 기본 자료구조에 비하여 **매우 빠른 작업 속도** 제공
- **수치 연산**에 유용한 **다양한 함수 지원**

<br />

## 배열 생성 및 사용방법

1. 넘파이를 사용하기 위해 패키지를 불러온다.

```python
# as 뒤에 이름은 이름을 대체라는 별칭이다.
import numpy as np
```

2. 넘파이의 `array()` 함수를 사용해 배열을 생성한다.

```python
# array() 함수에 파이썬 리스트를 전달해 넘파이 배열 생성
mid_scores = np.array([10, 20, 30])
```

3. 2개의 배열을 합하여 계산을 수행한다.

```python
# 배열 생성
mid_scores = np.array([10, 20, 30])
final_scores = np.array([60, 70, 80])

# 덧셈 연산 하기
total = mid_scores + final_scores
print(f'시험성적의 합계: {total}')
print(f'시험성적의 평균: {total / 2}')
```

실행 결과

```python
시험성적의 합계: [ 70  90 110]
시험성적의 평균: [35. 45. 55.]
```

> 넘파이의 + 연산자는 2개의 넘파이 배열에서 대응하는 원소들 끼리 합을 구해 같은 크기의 배열에 담는다.

<br />

### ndarray (다차원 배열)의 속성들

```python
import numpy as np

a = np.array([1, 2, 3])
print(a.shape) # 객체의 형태
print(a.ndim)  # 객체의 차원
print(a.dtype)  # 객체 내부 자료형
print(a.itemsize)  # 객체 내부 자료형이 차지하는 메모리 크기 (byte)
print(a.size)  # 객체의 전체 크기 (항목의 수)
```

실행 결과

```
(3,)
1
int64
8
3
```

<br />

## 인덱싱 및 슬라이싱

인덱싱 및 슬라이싱을 이용해서 1차원 배열에서 특정한 요소를 꺼낼 수 있다.

```python
scores = np.array([88, 72, 93, 94, 89, 78, 99])
```

1. 인덱싱 (특정한 요소를 얻는 방법)

   - 넘파이 배열에서 특정한 요소를 추출하려면 인덱스를 사용하는데,
   - 파이썬 리스트와 마찬가지로 **인덱스는 0부터 시작**
   - 따라서 인덱스를 2로 지정하면 93이 출력된다.
   - **마지막 요소**에 접근하려면 인덱스로 `-1`을 주면 된다.

2. 슬라이싱 (요소 집합을 얻는 방법)
   - 시작 인덱스와 종료 인덱스를 통해 `요소의 집합`을 추출할 수 있는데,
   - 시작 인덱스나 종료 인덱스는 `생략`이 가능하다.
   - (마지막 인덱스를 생략하면 디폴트 값은 -1)
   - 또한, scores\[4:-1] 같은 음수 인덱싱도 가능하다.
   - 따라서 위와 같이 지정한다면 [89, 78] 이 출력된다.

### 논리적인 인덱싱

어떤 조건을 주어서 배열에 원하는 값을 추려내는 것

- ages에서 20살 이상인 사람만 고르려고 한다면?

```python
import numpy as np

ages = np.array([18, 19, 25, 30, 28])
# 조건으로 ages가 20이상인 요소만 추려내기
y = ages > 20
print(y)
# 조건에 맞는 요소만 뽑아내기
print(ages[ages > 20])
```

실행결과

```
[False False  True  True  True]
[25 30 28]
```

<br />

## 넘파이의 제공함수

### 1. arange() 함수

```python
numpy.arange([start], stop, [step])
# start: 데이터 생성을 시작할 값(디폴트값 0)
# stop: 데이터 생성을 멈출 값(필수 값, 데이터는 stop - 1 까지 생성된다.)
# step: 데이터 생성 간격(디폴트값 1)
```

range() 와 비슷하지만 `arange()`는 넘파이 배열을 만들어 준다.

```python
import numpy as np
np.arange(5)
np.arange(1, 6)
np.arange(1, 10, 2)

# 실행 결과 (차례대로)
# array([0 1 2 3 4])
# array([1 2 3 4 5])
# array([1 3 5 7 9])
```

#### range() 와 비교?

arange() 을 보면 for 반복문을 위해 사용한 range() 함수와 비슷하다. <br />
그런데 range() 를 통해 생성된 것은 반복 가능 객체이고 이것으로 리스트를 만들 수 있다. <br />
따라서 range()를 사용해 arange() 와 같이 넘파이 배열을 만들고 싶으면?

```python
import numpy as np
np.array(range(5))

# 실행 결과
# array([0, 1, 2, 3, 4])
```

<br />

### 2. reshape() 함수

`reshape()`는 데이터의 개수를 유지한 채로 배열의 차원과 형태를 변경해준다. <br />
이 함수의 인자인 shape을 튜플의 형태로 넘겨주는 것이 원칙이지만, <br />
reshape(x, y) 라고 하면 reshape((x, y)) 과 동일하게 처리된다.

```python
import numpy as np

y = np.arange(12)
# array([0, 1, 2, 3, 4 ... 9, 10, 11])
y.reshape(3, 4)
```

실행 결과

```
array([[ 0,  1,  2,  3],
       [ 4,  5,  6,  7],
       [ 8,  9, 10, 11]])
```

<br />

인수로 `-1`을 전달하면 데이터의 개수에 맞춰 **자동으로 배열의 형태가 결정**된다.

```python
import numpy as np

y = np.arange(12)
y.reshape(6, -1)
```

실행결과

```
array([[ 0,  1],
       [ 2,  3],
       [ 4,  5],
       [ 6,  7],
       [ 8,  9],
       [10, 11]])
```

<br />

생성될 배열의 형태가 호환되지 않을 경우?

```python
import numpy as np

y = np.arange(12)
y.reshape(7, 2)
```

실행 결과 (에러)

```
y.reshape(7, 2)
ValueError: cannot reshape array of size 12 into shape (7,2)
```

<br />

### 3. flatten() 함수

`flatten()`은 평탄화 함수로 2차원 이상의 고차원 배열을 1차원 배열로 만들어 주는 함수이다.

```python
import numpy as np

y = np.arange(12)
y.reshape(3, 4)  # 2차원 배열 형태
y.flatten()  # 다시 1차원 배열로 만들어 준다.
```

실행 결과

```
array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11])
```
