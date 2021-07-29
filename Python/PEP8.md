# PEP8 스타일 가이드
- PEP8는 파이썬 개선 제안서, 파이썬 코드를 어떻게 구상할 지 알려주는 스타일 가이드
- 다른 사람과 원활하게 협업하려면 공통된 스타일 공유가 필요
- 일관성 있는 스타일은 나중에 수정하기도 쉽다.

<a href="https://www.python.org/dev/peps/
pep-0008">참고문서</a>
<br /><br />

## 이름 규칙
모든 변수와 함수 이름은 소문자로 사용하며, 여러 단어일 경우 `_`으로 나눠준다.

```python
variable_name = 1

def some_function_name():
    print("Hello")
```

모든 상수 이름은 **대문자로** 쓰고, 여러 단어일 경우 `_`으로 나눠준다.

```python
PI = 3.14
```

변수 이름은 의미 있게 작명해준다.

```python
redius = 2
PI = 3.14
print(pi * radius * radius)
```

<br /><br />

## 화이트 스페이스
### 들여쓰기
들여쓰기는 무조건 공백 4칸으로 사용

```python
def say_hello():
    print("Hello, World!!")
```

<br />

### 함수 정의
함수 정의 위아래로 빈 줄이 두 개씩은 있어야 한다. <br />
하지만 파일의 첫 줄이 함수 정의인 경후 해당 함수 위에는 없어도 된다.

```python
def a():
    print('a')


def b():
    print('b')


def c();
    print('c')
```

<br />

### 괄호 안
괄호 바로 안에는 공백이 있으면 안된다.

```python
spam(ham[1], {eggs: 2})
```

<br />

### 함수 괄호
함수를 정의하거나 호출할 때, 함수 이름과 괄호 사이에 공백이 있으면 안된다.

```python
def spam(x):
    print(x + 2)


spam(1)
```

<br />

### 쉼표
쉼표 앞에는 띄어쓰기 금지

```python
print(x , y)  # bad

print(x, y)  # good
```

<br />

### 지정 연산자
지정 연산자 앞뒤로 띄어쓰기 한칸씩 해주어야 된다.

```python
x=1  # bad

x = 1  # good
```

<br />

### 연산자
기본적으로는 연산자 앞뒤로 띄어쓰기를 하나씩 한다

```python
i = i + 1
submitted += 1

# 하지만 우선 순위를 강조하기 위해 연산자 앞뒤로 붙이는 것을 권장
x = x*2 - 1
hypot2 = x*x + y*y
c = (a+b) * (a-b)
```

<br />

### 코멘트
일반 코드와 같은 줄에 쓰는 경우, 앞에 띄어쓰기 최소 두 개를 해준다.

```python
x = x + 1  # 코멘트
```
