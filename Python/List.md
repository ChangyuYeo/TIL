# 리스트 기본 정리
## 리스트에서 값의 존재 확인하기
해당 리스트에 원하는 값이 있는지 확인해보고 싶으면

```python
def list(some_list, value):
    i = 0
    while i < len(some_list):
        # 값을 찾으면 True 리턴
        if some_list[i] == value:
          return True
        i = i + 1

  # 값을 찾지 못하고 반복문이 끝나면 False 리턴
    return False

num_list = [1, 3, 5, 7, 9, 11]
print(list(num_list, 3)) # True
print(list(num_list, 4)) # False
```

이런 식으로 코드를 입력하면 되지만,
<br /><br />

`in` 이라는 파이썬에서 기본으로 제공하는 키워드를 사용하면
<br/>
더 간단하고 직관적으로 코드를 만들어 낼 수 있다.

```python
primes = [1, 3, 5, 7, 9, 11]

print(3 in primes) # True
print(4 in primes) # False
```

in 앞에 `not`을 써주면 거꾸로 값이 없는지 확인할 수 있다.
<br />

```python
primes = [1, 3, 5, 7, 9, 11]

print(3 not in primes) # False
print(4 not in primes) # True
```

<br /><br />

## Nested List
Nested List는 간단하게 말해서 리스트 안에 또 다른 리스트가 있는 것을 말한다.
<br />

```python
num_list = [[1, 3, 5], [12, 14, 16], [100, 101, 102]]

print(num_list[0])  # [1, 3, 5]
print(num_list[1])  # [12, 14, 16]
print(num_list[2])  # [100, 101, 102]

print(num_list[0][0])  # 1
print(num_list[2][2])  # 102
```

이런 식으로 활용이 가능하다.
<br /><br />

## list의 메소드들
### sort 메소드
**새로운 리스트를 생성하지 않고** 해당 리스트를 정렬된 상태로 바꾸어주는 메소드 이다.

```python
num_list = [6, 20, 9, 3, 100]
num_list.sort()

print(num_list)  # [3, 6, 9, 20, 100]
```

<br /><br />

### reverse 메소드
reverse() 는 해당 리스트의 원소들을 뒤집어진 순서로 배치해주는 메소드 이다.
<br />

```python
num_list = [6, 20, 9, 3, 100]
num_list.reverse()

print(num_list)  # [100, 3, 9, 20, 6]
```

<br /><br />

### index 메소드
index() 는 해당 리스트에서 파라미터로 받은 값을 갖고 있는 원소의 index를 리턴해준다.

```python
num_list = [6, 20, 9, 3, 100]

print(num_list.index(20))  # 1
print(num_list(3))  # 3
```

<br /><br />

### remove 메소드
remove() 는 해당 리스트에서 파라미터로 받은 값을 갖고 있는 원소를 삭제해준다.

```python
num_list = [6, 20, 9, 3, 100]
num_list.remove(20)

print(num_list)  # [6, 9, 3, 100]
```

<br /><br />

---

<br /><br />

# 리스트와 문자열
- 리스트와 문자열은 굉장히 비슷하다.
- 리스트는 자료형들의 나열이라면, 문자열은 문자들의 나열이라고 할 수 있다.
<br /><br />


## indexing 인덱싱
리스트와 문자열은 공통적으로 인덱싱이 가능하다.

```python
# 리스트 인덱싱
my_list = ['A', 'B', 'C', 'D', 'E']
print(num_list[1])  # B
print(num_list[3])  # D
print(num_list[-1])  # E

# 문자열  인덱싱
my_string = 'ABCDE'
print(my_string[1])  # B
print(my_string[3])  # D
print(my_string[-1])  # E
```

<br /><br />

## for 반복문
두 자료형은 for 반복문도 똑같이 활용할 수 있다.

```python
# 리스트 for
my_list = ['A', 'B', 'C', 'D', 'E']
for index in my_list:
    print(index, end='')  # ABCDE

# 문자열 for
my_string = 'ABCDE'
for index in my_string:
    print(index, end='')  # ABCDE
```

<br /><br />

## slicing 슬라이싱
리스트, 문자열 모두 슬라이싱이 가능하다.

```python
# 리스트 slicing
my_list = ['A', 'B', 'C', 'D', 'E']
print(my_list[0:3])  # ['A', 'B', 'C']
print(my_list[1:])  # ['B', 'C', 'D', 'E']
print(my_list[:2])  # ['A', 'B']

# 문자열 slicing
my_string = 'ABCDE'
print(my_string[0:3])  # ABC
print(my_string[1:])  # BCDE
print(my_string[:2])  # AB
```

<br /><br />

## 덧셈 연결
\+ 를 이용해서 연결을 할 수 있다.

```python
# 서로다른 리스트 연결
num_list1 = [1, 2, 3]
num_list2 = [4, 5, 6]
num_list = num_list1 + num_list2
print(num_list)  # [1, 2, 3, 4, 5, 6]

# 서로다른 문자열 연결
string1 = '123'
string2 = '456'
string = string1 + string2
print(string)  # 123456
```

<br /><br />

## len 함수
마찬가지로 두 자료형은 길이를 알 수 있는 len 함수를 사용할 수 있다.

```python
# 리스트 len
my_list = ['A', 'B', 'C', 'D', 'E']
print(len(my_list))  # 5

# 문자열 len
my_string = 'ABCDE'
print(len(my_string))  # 5
```

<br /><br />

## 리스트와 문자열의 차이점 (수정 여부)

> Mutable 와 Immutable <br />
> 리스트는 데이터를 수정할 수 있지만, 문자열은 데이터를 수정할 수 없다. <br />
> 리스트와 같이 수정 가능한 자료형은 `Mutable` 라고 하고, <br />
> 문자열과 같이 수정 불가능한 자료형은 `Immutable` 라고한다.

<br />

리스트의 데이터 수정과정
```python
my_list = ['A', 'B', 'C', 'D', 'E']
my_list[0] = 'Z'
print(my_list)  # ['Z', 'B', 'C', 'D', 'E']
```

<br />

문자열의 데이터 수정시도
```python
my_string = 'ABCDE'
my_string[0] = 'Z'
print(my_string)  # error
```
